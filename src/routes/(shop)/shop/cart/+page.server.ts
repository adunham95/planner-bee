import { addOnItems } from '$lib/addOnItems';
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

	let subTotal = 0;

	const cart = await prisma.order.findFirst({
		where: {
			id: cartID
		},
		include: {
			event: { include: { eventTemplate: true } },
			eCard: { include: { eCardTemplate: true, recipients: true } },
			orderOptions: true
		}
	});

	console.log({ cart });

	const products = [];

	cart?.eCard.forEach((c) => {
		const addOns = cart?.orderOptions
			.filter((opt) => opt.eCardId === c.id && opt.key === 'addOn')
			.map((opt) => {
				const addOn = addOnItems.find((i) => i.sku === opt.value);
				subTotal += addOn?.cost || 0;
				return { ...addOn, id: opt.id };
			});
		products.push({ ...c, addOns });
		subTotal += c.eCardTemplate?.cost || 0;
	});

	cart?.event.forEach((evt) => {
		const addOns = cart?.orderOptions
			.filter((opt) => opt.eventId === evt.id && opt.key === 'addOn')
			.map((opt) => {
				const addOn = addOnItems.find((i) => i.sku === opt.value);
				subTotal += addOn?.cost || 0;
				return { ...addOn, id: opt.id };
			});
		products.push({ ...evt, addOns });
		subTotal += evt.eventTemplate?.cost || 0;
	});

	const taxes = subTotal * 0.1;

	return {
		products,
		orderEstimate: {
			total: subTotal + taxes,
			lineItems: [
				{ title: 'Subtotal', value: subTotal },
				{ title: 'Taxes', value: taxes }
			]
		}
	};
};

export const actions: Actions = {
	checkout: async ({ request, locals, cookies }) => {
		const cartID = cookies.get('cart');

		console.log('cartID', cartID);

		const data = await request.formData();
		// Sender
		const senderName = data.get('senderName');
		const senderEmail = data.get('senderEmail');
		const senderID = locals.user?.id;

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

		console.log({
			senderName,
			senderEmail,
			senderID,
			orderNumber
		});

		await prisma.order.update({
			where: {
				id: cartID
			},
			data: {
				orderNumber: orderNumber,
				customerName: senderName,
				customerEmail: senderEmail,
				customerID: senderID,
				status: 'in progress'
			}
		});

		cookies.set('cart', '', { path: '/', maxAge: 1 });

		console.log({ orderNumber });
	},
	remove: async ({ request }) => {
		const data = await request.formData();
		const eventID = data.get('eventID');
		const eCardID = data.get('eCardID');
		const addOnID = data.get('addOnID');

		console.log({ eventID, eCardID, addOnID });

		if (eventID && typeof eventID === 'string') {
			await prisma.event.delete({
				where: { id: eventID }
			});
		}
		if (eCardID && typeof eCardID === 'string') {
			await prisma.eCard.delete({
				where: { id: eCardID }
			});
		}
		if (addOnID && typeof addOnID === 'string') {
			await prisma.optionItem.delete({
				where: { id: addOnID }
			});
		}
	}
};
