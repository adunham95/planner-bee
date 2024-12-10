import prisma from '$lib/prisma';
import { error } from 'console';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.eventTheme.findFirst({
		where: {
			sku
		},
		include: {
			options: true
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

		const addedSKUs: string[] = [];

		const cartOptions: { key: string; value: string }[] = [];

		for (const pair of data.entries()) {
			const [key, value] = pair;
			if (key.startsWith('sku')) {
				const [, sku] = key.split('-');
				addedSKUs.push(sku);
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

		const cartID = cookies.get('cart');

		console.log('cartID', cartID);

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
					sku: s
				}))
			});
		} else {
			const cart = await prisma.order.create({
				data: {
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

			console.log({ cart });

			cookies.set('cart', cart.id || '', { path: '/', maxAge: 86400 });
		}

		redirect(303, '/cart');
	}
};
