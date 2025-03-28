import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { eCardComponents } from '$lib/ecardComponents';
import { toCamelCase } from '$lib/utils/toCamelCase';

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
		const imageURL = data.get('imageURL');
		const visible = data.get('visible');

		console.log({ visible });

		const eCardComponents: {
			[key: string]: {
				label?: string;
				ecardComponentID: string;
				default?: string;
				editable?: string;
				customStyles?: string;
				componentID?: string;
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
				if (!eCardComponents[randomID]) {
					eCardComponents[randomID] = { ecardComponentID: '' };
				}
				eCardComponents[randomID][val] = value;
			});
		console.log({ eCardComponents });

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

		const ecard = await prisma.eCardTemplate.create({
			data: {
				name,
				description: description || '',
				sku: sku.toUpperCase(),
				cost: parseInt(price) || 0,
				imageURL,
				visible: visible == 'on',
				components: {
					createMany: {
						data: Object.values(eCardComponents).map((element) => {
							return {
								key: element.key || toCamelCase(element.label),
								ecardComponentID: element.componentID || element.ecardComponentID,
								label: element.label,
								default: element.default,
								editable: element.editable === 'on' || true,
								customStyles: element.customStyles
							};
						})
					}
				}
			}
		});

		console.log({ ecard });

		return { ecard };
	}
};
