import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import products from '$lib/testCards.json';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = products.cards.find((card) => card.sku === sku);

	if (!product) redirect(404, '/404');

	return {
		product
	};
};
