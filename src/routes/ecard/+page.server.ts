import prisma from '$lib/prisma';

export const load = async () => {
	const eCards = await prisma.eCardTemplate.findMany();

	console.log(eCards);

	return { eCards };
};
