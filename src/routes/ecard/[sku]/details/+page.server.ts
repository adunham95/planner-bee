import prisma from '$lib/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.eCardTemplate.findFirst({
		where: {
			sku
		},
		include: {
			components: true
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
	default: async ({ request, cookies, params }) => {
		const { sku } = params;
		const data = await request.formData();

		const cartOptions = [...data.entries()].map(([key, value]) => {
			return {
				ecardComponentID: key,
				value: value.toString()
			};
		});

		console.log('dataEntries', [...data.entries()]);

		const cartID = cookies.get('cart');

		console.log('cartID', cartID);

		const cart = await prisma.order.create({
			data: {
				ecardSku: sku,
				eCardOptions: {
					createMany: { data: cartOptions }
				}
			}
		});

		console.log({ cart });

		cookies.set('cart', cart.id || '', { path: '/', maxAge: 86400 });

		redirect(303, '/cart');
	}
};
