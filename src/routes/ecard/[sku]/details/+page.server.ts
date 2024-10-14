import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.eCard.findFirst({
		where: {
			sku
		}
	});

	console.log({ product });

	if (!product) redirect(404, '/404');

	return {
		product
	};
};
