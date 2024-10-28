import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/login');
	const { id } = event.params;

	const order = await prisma.order.findFirst({
		where: {
			orderNumber: id
		},
		include: {
			eCard: true,
			eCardOptions: true,
			recipients: true
		}
	});

	return {
		order
	};
};