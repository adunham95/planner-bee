import prisma from '$lib/prisma';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { redirect } from '@sveltejs/kit';

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
