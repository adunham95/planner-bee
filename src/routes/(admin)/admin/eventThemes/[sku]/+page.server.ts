import { eCardComponents } from '$lib/ecardComponents';
import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const eCards = await prisma.eCardTemplate.findMany();

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
			eCardComponents,
			eCards
		};
	}

	return {
		theme,
		eCardComponents,
		eCards
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
		const imageURL = data.get('imageURL');
		const eCardSku = data.get('eCardSku');

		const components: {
			[key: string]: {
				id?: string;
				label?: string;
				componentID: string;
				default?: string;
				editable?: string;
				customStyles?: string;
				options?: string;
				action?: string;
				displayOrder?: string;
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

		if (typeof eCardSku !== 'string') {
			return fail(400, {
				message: 'Invalid ECard Invitation'
			});
		}

		if (typeof imageURL !== 'string') {
			return fail(400, {
				message: 'Invalid imageURL'
			});
		}

		try {
			await prisma.eventTheme.update({
				where: {
					id
				},
				data: {
					name,
					description: description || '',
					sku: sku.toUpperCase(),
					cost: parseInt(price) || 0,
					imageURL,
					eCardSku
				}
			});
		} catch (error: unknown) {
			console.log(error);
			return fail(400, {
				message: 'Error saving event',
				error: error
			});
		}

		try {
			const slotsToDelete = Object.values(components)
				.filter((c) => c.id !== undefined && c.action === 'remove')
				.map((c) => c.id || '') as string[];

			//Delete all the ones we have removed
			await prisma.eventThemeOptions.deleteMany({
				where: {
					eventThemeID: {
						equals: id
					},
					componentID: {
						in: slotsToDelete
					}
				}
			});
		} catch (error: unknown) {
			console.log('error deleting element', error);
			return fail(400, {
				message: 'Error deleting elements',
				error: error
			});
		}

		try {
			await prisma.eventThemeOptions.createMany({
				data: Object.values(components)
					.filter((c) => c.action === 'add')
					.map((c) => ({
						eventThemeID: id,
						componentID: c.componentID,
						label: c.label,
						default: c.default,
						editable: c.editable === 'on' || true,
						customStyles: c.customStyles,
						options: c.options,
						displayOrder: parseInt(c.displayOrder || '0')
					}))
			});
		} catch (error: unknown) {
			console.log('error creating new events', error);
			return fail(400, {
				message: 'Error creating new elements',
				error: error
			});
		}

		try {
			const valuesToUpdate = Object.values(components)
				.filter((c) => c.action === 'undefined' || c.action === 'edit')
				.map((c) => ({
					id: c.id as string,
					eventThemeID: id,
					componentID: c.componentID,
					label: c.label,
					default: c.default,
					editable: c.editable === 'on',
					options: c.options,
					customStyles: c.customStyles,
					displayOrder: parseInt(c.displayOrder || '0')
				}));

			for (let index = 0; index < valuesToUpdate.length; index++) {
				const element = valuesToUpdate[index];
				await prisma.eventThemeOptions.update({
					where: {
						id: element.id
					},
					data: {
						componentID: element.componentID,
						label: element.label,
						default: element.default,
						editable: element.editable,
						customStyles: element.customStyles,
						options: element.options,
						displayOrder: element.displayOrder
					}
				});
			}
		} catch (error: unknown) {
			console.log('error updating elements', error);
			return fail(400, {
				message: 'Error updating elements',
				error: error
			});
		}

		return { success: true };
	}
};
