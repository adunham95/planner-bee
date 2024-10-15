import prisma from '$lib/prisma';
import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { eCardComponents } from '$lib/ecardComponents';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.eCardTemplate.findFirst({
		where: {
			sku
		},
		include: {
			components: true
		}
	});

	console.log({ product });

	if (!product) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		product,
		eCardComponents
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id');
		const name = data.get('name');
		const description = data.get('description');
		const sku = data.get('sku');
		const price = data.get('price');

		const components: string[] =
			data.getAll('components').filter((a): a is string => {
				return typeof a === 'string' && a !== '';
			}) || [];

		if (!id || typeof id !== 'string') {
			return fail(400, {
				message: 'Invalid id'
			});
		}

		if (!name || typeof name !== 'string' || name.length < 2) {
			return fail(400, {
				message: 'Invalid title'
			});
		}

		if (typeof description !== 'string') {
			return fail(400, {
				message: 'Invalid description'
			});
		}

		if (!sku || typeof sku !== 'string' || sku.length < 4) {
			return fail(400, {
				message: 'Invalid sku'
			});
		}

		if (typeof price !== 'string') {
			return fail(400, {
				message: 'Invalid price'
			});
		}

		const ecard = await prisma.eCardTemplate.update({
			where: {
				id
			},
			data: {
				name,
				description: description || '',
				sku: sku.toUpperCase(),
				cost: parseInt(price) || 0
			}
		});

		//Delete all the ones we have removed
		await prisma.eCardComponent.deleteMany({
			where: {
				ecardComponentID: {
					notIn: components
				}
			}
		});

		//Current components
		const currentComponents = await prisma.eCardComponent.findMany({
			where: {
				ecardID: {
					equals: id
				}
			}
		});

		//Add new ones
		await prisma.eCardComponent.createMany({
			data: components
				.filter((a: string) => !currentComponents.some((b) => b.ecardComponentID === a))
				.map((a: string) => ({
					ecardID: id,
					ecardComponentID: a
				}))
		});

		return { ecard };
	}
};
