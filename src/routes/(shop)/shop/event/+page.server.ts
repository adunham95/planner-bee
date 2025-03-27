import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const products = await prisma.eventTheme.findMany({
		include: {
			options: true
		}
	});

	return {
		products
	};
};
