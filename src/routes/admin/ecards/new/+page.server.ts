import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { eCardComponents } from '$lib/ecardComponents';

export const load = async () => {
	return { eCardComponents };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const description = data.get('description');
		const sku = data.get('sku');
		const price = data.get('price');

		const components = data.getAll('components').filter((a) => a !== '') || [];

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

		const ecard = await prisma.eCardTemplate.create({
			data: {
				name,
				description: description || '',
				sku: sku.toUpperCase(),
				cost: parseInt(price) || 0,
				components: {
					createMany: {
						data: components.map((component) => ({
							ecardComponentID: component as string
						}))
					}
				}
			}
		});

		return { ecard };
	}
};
