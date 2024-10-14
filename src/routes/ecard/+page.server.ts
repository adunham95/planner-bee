import prisma from '$lib/prisma';

export const load = async () => {
	const eCards = await prisma.eCard.findMany();

	console.log(eCards);

	return { eCards };
};
