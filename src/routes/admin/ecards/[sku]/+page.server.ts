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

		console.log('dataEntries', [...data.entries()]);

		const eCardComponents: {
			[key: string]: {
				label?: string;
				ecardComponentID: string;
				default?: string;
				editable?: string;
				id?: string;
				action?: string;
				[key: string]: unknown;
			};
		} = {};

		[...data.entries()]
			.filter(([key]) => key.startsWith('component%%'))
			.forEach(([key, value]) => {
				console.log({ key, value });
				const randomID = key.split('%%')[1];
				const val = key.split('%%')[2];
				if (!eCardComponents[randomID]) {
					eCardComponents[randomID] = { ecardComponentID: '' };
				}
				eCardComponents[randomID][val] = value;
			});

		console.log({ eCardComponents });

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

		const slotsToDelete = Object.values(eCardComponents)
			.filter((c) => c.id !== undefined && c.action === 'remove')
			.map((c) => c.id || '');

		//Delete all the ones we have removed
		await prisma.eCardComponent.deleteMany({
			where: {
				ecardID: {
					equals: id
				},
				ecardComponentID: {
					in: slotsToDelete
				}
			}
		});

		//Add new ones
		await prisma.eCardComponent.createMany({
			data: Object.values(eCardComponents)
				.filter((c) => c.action === 'add')
				.map((c) => ({
					ecardID: id,
					ecardComponentID: c.ecardComponentID,
					label: c.label,
					default: c.default,
					editable: c.editable === 'on'
				}))
		});

		const valuesToUpdate = Object.values(eCardComponents)
			.filter((c) => c.action === 'undefined')
			.map((c) => ({
				id: c.id,
				ecardID: id,
				ecardComponentID: c.ecardComponentID,
				label: c.label,
				default: c.default,
				editable: c.editable === 'on'
			}));

		for (let index = 0; index < valuesToUpdate.length; index++) {
			const element = valuesToUpdate[index];
			await prisma.eCardComponent.update({
				where: {
					id: element.id
				},
				data: {
					ecardComponentID: element.ecardComponentID,
					label: element.label,
					default: element.default,
					editable: element.editable || true
				}
			});
		}

		return { success: true };
		return { ecard };
	}
};
