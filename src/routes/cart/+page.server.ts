import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const cartID = cookies.get('cart');

	console.log('cartID', cartID);

	const cart = await prisma.order.findFirst({
		where: {
			id: cartID
		},
		include: {
			eCard: true
		}
	});

	return {
		cart
	};
};
