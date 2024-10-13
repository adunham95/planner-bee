import prisma from '$lib/prisma';

export const load = async (event) => {
	const eCards = await prisma.eCard.findMany();

	console.log(eCards);

	return { eCards };
};
