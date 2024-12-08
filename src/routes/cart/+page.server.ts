import prisma from '$lib/prisma';
import { generateOrderNumber } from '$lib/utils/generateOrderNumber';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	const cartID = cookies.get('cart');

	console.log('cartID-load', cartID);

	if (!cartID) {
		return {};
	}

	const cart = await prisma.order.findFirst({
		where: {
			id: cartID
		},
		include: {
			products: {
				include: {
					ecard: true,
					eventTheme: true,
					options: true
				}
			}
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
		const senderID = locals.user?.id;

		// Recipient
		const recipientFirstName = data.get('recipientFirstName');
		const recipientLastName = data.get('recipientLastName');
		const recipientEmail = data.get('recipientEmail');

		const orderNumber = generateOrderNumber();

		if (!cartID || typeof cartID !== 'string') {
			return fail(400, {
				message: 'Invaild cart'
			});
		}

		if (!senderName || typeof senderName !== 'string') {
			return fail(400, {
				message: 'Invalid Sender name'
			});
		}

		if (!senderEmail || typeof senderEmail !== 'string') {
			return fail(400, {
				message: 'Invalid Sender Email'
			});
		}

		if (recipientEmail && typeof recipientEmail !== 'string') {
			return fail(400, {
				message: 'Invalid Recipient Email'
			});
		}

		if (recipientFirstName && typeof recipientFirstName !== 'string') {
			return fail(400, {
				message: 'Invalid Recipient First Name'
			});
		}

		if (recipientLastName && typeof recipientLastName !== 'string') {
			return fail(400, {
				message: 'Invalid Recipient Last Name'
			});
		}

		console.log({
			senderName,
			senderEmail,
			senderID,
			recipientEmail,
			recipientFirstName,
			recipientLastName,
			orderNumber
		});

		if (recipientEmail && recipientFirstName && recipientLastName) {
			const recipient = await prisma.recipient.create({
				data: {
					orderID: cartID,
					firstName: recipientFirstName,
					lastName: recipientLastName,
					email: recipientEmail
				}
			});

			console.log('recipient', recipient);
		}

		await prisma.order.update({
			where: {
				id: cartID
			},
			data: {
				orderNumber: orderNumber,
				senderName: senderName,
				senderEmail: senderEmail,
				senderID: senderID,
				status: 'in progress'
			}
		});

		cookies.set('cart', '', { path: '/', maxAge: 1 });

		console.log({ orderNumber });
	}
};
