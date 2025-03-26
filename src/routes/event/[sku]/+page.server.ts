import prisma from '$lib/prisma';
import { error } from 'console';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { logAllFormData } from '$lib/utils/logAllFormData';
import { EOrderType } from '$lib/utils/types';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.eventTheme.findFirst({
		where: {
			sku
		},
		include: {
			options: true,
			invitation: { include: { components: true } }
		}
	});

	console.log({ product });

	if (!product) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		product
	};
};

export const actions: Actions = {
	addToCart: async ({ request, cookies, params }) => {
		const { sku } = params;
		const data = await request.formData();
		logAllFormData(data);

		const addedSKUs: string[] = [];
		let inviteSku: string | undefined = undefined;

		const cartOptions: { key: string; value: string }[] = [];
		const inviteOptions: { key: string; value: string }[] = [];

		for (const pair of data.entries()) {
			const [key, value] = pair;
			if (key.startsWith('sku')) {
				const [, sku] = key.split('-');
				addedSKUs.push(sku);
			} else if (key.startsWith('invite')) {
				const [, k] = key.split('-');
				// addedSKUs.push(sku);
				if (k == 'sku') {
					inviteSku = value.toString();
				} else {
					inviteOptions.push({ key: k, value: value.toString() });
				}
			} else {
				cartOptions.push({
					key,
					value: value.toString()
				});
			}
			console.log(pair[0], pair[1]);
		}

		console.log('dataEntries', [...data.entries()]);
		console.log('cartOptions', cartOptions);
		console.log('addedSKUs', addedSKUs);
		console.log('inviteSku', inviteSku);
		console.log('inviteOptions', inviteOptions);

		const cartID = cookies.get('cart');

		console.log('cartID', { cartID, addedSKUs });

		if (cartID) {
			await prisma.orderProduct.create({
				data: {
					orderID: cartID,
					eventThemeSku: sku,
					options: {
						createMany: {
							data: cartOptions
						}
					}
				}
			});
			await prisma.orderProduct.createMany({
				data: addedSKUs.map((s) => ({
					orderID: cartID,
					addOnSku: s
				}))
			});
			if (inviteSku) {
				await prisma.orderProduct.create({
					data: {
						orderID: cartID,
						ecardSku: inviteSku,
						options: {
							createMany: {
								data: inviteOptions
							}
						}
					}
				});
			}
		} else {
			const cart = await prisma.order.create({
				data: {
					orderType: EOrderType.event,
					products: {
						create: {
							eventThemeSku: sku,
							options: {
								createMany: {
									data: cartOptions
								}
							}
						}
					}
				}
			});

			await prisma.orderProduct.createMany({
				data: addedSKUs.map((s) => ({
					orderID: cart.id,
					addOnSku: s
				}))
			});

			if (inviteSku) {
				await prisma.orderProduct.create({
					data: {
						orderID: cart.id,
						ecardSku: inviteSku,
						options: {
							createMany: {
								data: inviteOptions
							}
						}
					}
				});
			}

			console.log({ cart });

			cookies.set('cart', cart.id || '', { path: '/', maxAge: 86400 });
		}

		redirect(303, '/cart');
	}
};
