import prisma from '$lib/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { logAllFormData } from '$lib/utils/logAllFormData';
import { generateOrderNumber } from '$lib/utils/generateOrderNumber';

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
	addToCart: async ({ request, cookies, params }) => {
		const { sku } = params;
		const data = await request.formData();
		logAllFormData(data);

		const cartOptions = [];

		for (const pair of data.entries()) {
			const [key, value] = pair;

			cartOptions.push({
				key,
				value: value.toString()
			});
			console.log(pair[0], pair[1]);
		}

		let cartID = cookies.get('cart');

		console.log('cartID', cartID);

		if (!cartID) {
			const cart = await prisma.order.create({
				data: {}
			});

			cartID = cart.id;
			cookies.set('cart', cartID || '', { path: '/', maxAge: 86400 });
		}

		const eventDateData = cartOptions.find((c) => c.key === 'event-date')?.value;
		const eventDate = eventDateData ? new Date(eventDateData) : null;

		const ecard = await prisma.eCard.create({
			data: {
				eCardNumber: generateOrderNumber('ECARD'),
				orderID: cartID,
				eCardTemplateSku: sku,
				deliveryDate: eventDate
			}
		});

		const ecardOptions = await prisma.optionItem.createMany({
			data: cartOptions.map((opt) => ({
				orderID: cartID,
				eCardId: ecard.id,
				...opt
			}))
		});

		console.log({ ecardOptions, ecard });

		redirect(303, '/shop/cart');
	}
};
