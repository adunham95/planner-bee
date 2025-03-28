import prisma from '$lib/prisma';
import { eCardComponents } from '$lib/ecardComponents';
import { fail } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { toCamelCase } from '$lib/utils/toCamelCase';

export const load = async () => {
	const eCards = await prisma.eCardTemplate.findMany();

	return { eCardComponents, eCards };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const description = data.get('description');
		const sku = data.get('sku');
		const price = data.get('price');
		const imageURL = data.get('imageURL');
		const eCardSku = data.get('eCardSku');

		const components: {
			[key: string]: {
				label?: string;
				componentID: string;
				default?: string;
				editable?: string;
				customStyles?: string;
				options?: string;
				key?: string;
				[key: string]: unknown;
			};
		} = {};

		[...data.entries()]
			.filter(([key]) => key.startsWith('component%%'))
			.forEach(([key, value]) => {
				console.log({ key, value });
				const randomID = key.split('%%')[1];
				const val = key.split('%%')[2];
				if (!components[randomID]) {
					components[randomID] = { componentID: '' };
				}
				components[randomID][val] = value;
			});
		console.log({ components });

		// return { success: true };

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

		if (typeof imageURL !== 'string') {
			return fail(400, {
				message: 'Invalid imageURL'
			});
		}

		if (typeof eCardSku !== 'string') {
			return fail(400, {
				message: 'Invalid ECard Invitation'
			});
		}

		const ecard = await prisma.eventTheme.create({
			data: {
				name,
				description: description || '',
				sku: sku.toUpperCase(),
				cost: parseInt(price) || 0,
				imageURL,
				eCardSku,
				options: {
					createMany: {
						data: Object.values(components).map((element) => {
							return {
								componentID: element.componentID,
								key: element.key || toCamelCase(element.label),
								label: element.label,
								default: element.default,
								editable: element.editable === 'on' || true,
								customStyles: element.customStyles,
								options: element.options
							};
						})
					}
				}
			}
		});

		return { ecard };
	}
};
