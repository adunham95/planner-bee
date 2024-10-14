import prisma from '$lib/prisma';

export const load = async () => {
	const eCards = await prisma.eCard.findMany({
		include: { components: { include: { ecardComponent: true } } }
	});

	console.log(eCards);

	return { eCards };
};
