import prisma from '$lib/prisma';

export const load = async () => {
	const events = await prisma.eventTheme.findMany({
		include: { options: true }
	});

	console.log(events);

	return { events };
};
