import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const cartID = cookies.get('cart');

	const cart = await prisma.cart.findFirst({
		where: {
			id: cartID
		},
		include: {
			cartItems: {
				include: {
					eCard: true,
					options: true
				}
			}
		}
	});

	return {
		cart
	};
};
