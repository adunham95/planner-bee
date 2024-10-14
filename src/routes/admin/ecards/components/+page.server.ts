import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const cardComponents = await prisma.eCardComponent.findMany({ include: { options: true } });

	return {
		cardComponents
	};
};
