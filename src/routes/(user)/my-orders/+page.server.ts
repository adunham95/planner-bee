import prisma from '$lib/prisma';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.order.findMany({
		where: {
			OR: [
				{
					senderID: {
						equals: event.locals.user.id
					}
				},
				{
					senderEmail: {
						equals: event.locals.user.email
					}
				}
			]
		},
		include: {
			eCard: true,
			eCardOptions: true,
			recipients: true
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
