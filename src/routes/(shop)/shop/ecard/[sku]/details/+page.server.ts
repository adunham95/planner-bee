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
		const addedSKUs: string[] = [];

		const cartOptions = [];

		for (const pair of data.entries()) {
			const [key, value] = pair;
			if (key.startsWith('addon')) {
				const [, sku] = key.split('-');
				addedSKUs.push(sku);
			}
			cartOptions.push({
				key,
				value: value.toString()
			});
			console.log(pair[0], pair[1]);
		}

		console.log('dataEntries', [...data.entries()]);

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
				orderID: cartID,
				eCardTemplateSku: sku,
				addOns: addedSKUs,
				deliveryDate: eventDate
			}
		});

		const ecardOptions = await prisma.optionItem.createMany({
			data: cartOptions.map((opt) => ({
				eCardId: ecard.id,
				...opt
			}))
		});

		console.log({ ecardOptions, ecard });

		redirect(303, '/shop/cart');
	}
};
