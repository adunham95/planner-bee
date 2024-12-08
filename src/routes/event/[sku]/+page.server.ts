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

		const cartOptions = [...data.entries()].map(([key, value]) => {
			return {
				key,
				value: value.toString()
			};
		});

		console.log('dataEntries', [...data.entries()]);
		console.log('cartOptions', cartOptions);

		const cartID = cookies.get('cart');

		console.log('cartID', cartID);

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

		console.log({ cart });

		cookies.set('cart', cart.id || '', { path: '/', maxAge: 86400 });

		redirect(303, '/cart');
	}
};
