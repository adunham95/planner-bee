import prisma from '$lib/prisma';

export const load = async () => {
	const eCards = await prisma.eCardComponent.findMany();

	console.log(eCards);

	return { eCards };
};
