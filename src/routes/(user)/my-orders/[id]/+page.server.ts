import prisma from '$lib/prisma';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { addOnItems } from '$lib/addOnItems';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/login');
	const { id } = event.params;

	const order = await prisma.order.findFirst({
		where: {
			orderNumber: id
		},
		include: {
			products: {
				include: {
					ecard: true,
					eventTheme: true,
					options: true
				}
			},
			recipients: true
		}
	});

	const orderData = {
		...order,
		products: order?.products.map((p) => {
			const addOn = addOnItems.find((i) => i.sku === p.addOnSku);
			return { ...p, addOn };
		})
	};

	return {
		order: orderData
	};
};

export const actions: Actions = {
	addRecipient: async ({ request, locals, cookies }) => {
		console.log('Add Recipient');

		const data = await request.formData();

		const orderID = data.get('orderID');

		// Recipient
		const firstName = data.get('firstName');
		const lastName = data.get('lastName');
		const email = data.get('email');
		const phone = data.get('phone');

		console.log({ firstName, lastName, email, phone, orderID });

		if (firstName && typeof firstName !== 'string') {
			return fail(400, {
				message: 'Invalid Recipient First name'
			});
		}

		if (lastName && typeof lastName !== 'string') {
			return fail(400, {
				message: 'Invalid Recipient Last name'
			});
		}

		if (email && typeof email !== 'string') {
			return fail(400, {
				message: 'Invalid Recipient email'
			});
		}

		if (phone && typeof phone !== 'string') {
			return fail(400, {
				message: 'Invalid Recipient phon'
			});
		}

		await prisma.recipient.create({
			data: {
				firstName: firstName || '',
				lastName: lastName || '',
				email,
				phone,
				orderID
			}
		});
	}
};
