import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/login');

	const orders = await prisma.order.findMany({
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
			recipients: true,
			products: {
				include: {
					ecard: true,
					eventTheme: true
				}
			}
		}
	});

	return {
		orders
	};
};
