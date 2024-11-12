import prisma from '$lib/prisma';
import { error } from 'console';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.eventTheme.findFirst({
		where: {
			sku
		},
		include: {
			options: true
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
