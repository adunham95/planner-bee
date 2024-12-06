import { eCardComponents } from '$lib/ecardComponents';
import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const theme = await prisma.eventTheme.findFirst({
		where: {
			sku
		},
		include: {
			options: true
		}
	});

	console.log({ theme });

	if (!theme) {
		return {
			eCardComponents
		};
	}

	return {
		theme,
		eCardComponents
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const description = data.get('description');
		const sku = data.get('sku');
		const price = data.get('price');
		const imageURL = data.get('imageURL');

		const components: {
			[key: string]: {
				label?: string;
				componentID: string;
				default?: string;
				editable?: string;
				customStyles?: string;
				options?: string;
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

		const ecard = await prisma.eventTheme.upsert({
			data: {
				name,
				description: description || '',
				sku: sku.toUpperCase(),
				cost: parseInt(price) || 0,
				imageURL,
				options: {
					createMany: {
						data: Object.values(components).map((element) => {
							return {
								componentID: element.componentID,
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
