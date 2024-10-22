import prisma from '$lib/prisma';
import { generateOrderNumber } from '$lib/utils/generateOrderNumber';
import { send } from 'vite';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const cartID = cookies.get('cart');

	console.log('cartID', cartID);

	const cart = await prisma.order.findFirst({
		where: {
			id: cartID
		},
		include: {
			eCard: true
		}
	});

	return {
		cart
	};
};

export const actions: Actions = {
	default: async ({ request, locals, cookies }) => {
		const cartID = cookies.get('cart');

		console.log('cartID', cartID);

		const data = await request.formData();
		// Sender
		const senderName = data.get('senderName');
		const senderEmail = data.get('senderEmail');

		// Recipient
		const recipientFirstName = data.get('recipientFirstName');
		const recipientLastName = data.get('recipientLastName');
		const recipientEmail = data.get('recipientEmail');

		const orderNumber = generateOrderNumber();

		console.log({
			senderName,
			senderEmail,
			recipientEmail,
			recipientFirstName,
			recipientLastName,
			orderNumber
		});
	}
};
