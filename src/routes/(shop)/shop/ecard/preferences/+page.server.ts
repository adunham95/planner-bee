import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { logAllFormData } from '$lib/utils/logAllFormData';

export const load: PageServerLoad = async ({ cookies, locals }) => {
	const eCardID = cookies.get('eCard');

	console.log({ eCardID });

	if (!eCardID) {
		redirect(303, '/shop/ecard');
	}

	const eCard = await prisma.eCard.findFirst({
		where: {
			id: eCardID
		},
		include: {
			eCardTemplate: true
		}
	});

	const contacts = await prisma.contact.findMany({
		where: {
			userID: locals.user?.id
		}
	});

	const recipients = await prisma.recipient.findMany({
		where: {
			eCardID
		}
	});

	console.log({ eCard });

	if (!eCard) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		eCard,
		contacts,
		recipients
	};
};

export const actions: Actions = {
	createRecipient: async ({ request, cookies }) => {
		const data = await request.formData();
		logAllFormData(data);

		const eCardID = cookies.get('eCard');

		const firstName = data.get('firstName');
		const lastName = data.get('lastName');
		const email = data.get('email');
		const phone = data.get('phone');

		const newRecipient = await prisma.recipient.create({
			data: {
				eCardID,
				firstName: firstName?.toString(),
				lastName: lastName?.toString(),
				email: email?.toString(),
				phone: phone?.toString()
			}
		});

		return { newRecipient };
	},
	addToCart: async ({ request, cookies }) => {
		const data = await request.formData();
		logAllFormData(data);

		const cartID = cookies.get('cart');
		const eCardId = cookies.get('eCard');

		console.log('cartID', cartID);

		const cartOptions = [];

		const rejectList = ['firstName', 'lastName', 'email', 'phone'];

		for (const pair of data.entries()) {
			const [key, value] = pair;

			if (rejectList.includes(key)) {
				//do nothing
			} else if (key === 'contacts') {
				const newRecipient = await prisma.recipient.create({
					data: {
						eCardID: eCardId,
						contactID: value.toString()
					}
				});
				console.log({ newRecipient });
			} else {
				cartOptions.push({
					key,
					value: value.toString()
				});
				console.log(pair[0], pair[1]);
			}
		}

		const ecardOptions = await prisma.optionItem.createMany({
			data: cartOptions.map((opt) => ({
				orderID: cartID,
				eCardId,
				...opt
			}))
		});

		console.log({ ecardOptions });

		redirect(303, '/shop/cart');
	}
};
