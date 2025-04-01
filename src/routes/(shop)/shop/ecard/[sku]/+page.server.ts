import prisma from '$lib/prisma';
import { error, fail, redirect } from '@sveltejs/kit';
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
	// addContact: async ({ request, locals }) => {
	// 	const data = await request.formData();
	// 	logAllFormData(data);

	// 	const firstName = data.get('firstName');
	// 	const lastName = data.get('lastName');
	// 	const email = data.get('email');
	// 	const phone = data.get('phone');

	// 	if (typeof firstName !== 'string') {
	// 		return fail(400, {
	// 			message: 'Invalid first name'
	// 		});
	// 	}
	// 	if (typeof lastName !== 'string') {
	// 		return fail(400, {
	// 			message: 'Invalid last name'
	// 		});
	// 	}
	// 	if (typeof email !== 'string') {
	// 		return fail(400, {
	// 			message: 'Invalid email'
	// 		});
	// 	}
	// 	if (typeof phone !== 'string') {
	// 		return fail(400, {
	// 			message: 'Invalid phone'
	// 		});
	// 	}
	// 	if (phone === '' && email === '') {
	// 		return fail(400, {
	// 			message: 'No Contact Info Provided'
	// 		});
	// 	}

	// 	const newContact = await prisma.contact.create({
	// 		data: {
	// 			firstName,
	// 			lastName,
	// 			email,
	// 			phone,
	// 			userID: locals.user?.id
	// 		}
	// 	});

	// 	return { newContact };
	// },
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

		cookies.set('eCard', ecard.id || '', { path: '/shop/ecard', maxAge: 86400 });

		console.log({ ecardOptions, ecard });

		redirect(303, '/shop/ecard/preferences');
	}
};
