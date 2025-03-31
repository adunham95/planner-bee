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

	console.log({ eCard });

	if (!eCard) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		eCard,
		contacts
	};
};

export const actions: Actions = {
	addToCart: async ({ request, cookies }) => {
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

		const cartID = cookies.get('cart');
		const eCardId = cookies.get('eCard');

		console.log('cartID', cartID);

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
