import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		const description = data.get('description');
		const key = data.get('key');

		const options = data.getAll('option').filter((a) => a !== '') || [];

		console.log({
			title,
			description,
			key,
			options
		});

		if (!title || typeof title !== 'string' || title.length < 2) {
			return fail(400, {
				message: 'Invalid title'
			});
		}

		if (!key || typeof key !== 'string') {
			return fail(400, {
				message: 'Invalid type'
			});
		}

		if (typeof description !== 'string') {
			return fail(400, {
				message: 'Invalid description'
			});
		}

		const newComponent = await prisma.eCardComponent.create({
			data: {
				title,
				description: description || '',
				componentKey: key.toLowerCase(),
				options: {
					createMany: {
						data: options.map((o) => ({ value: o as string }))
					}
				}
			}
		});

		console.log(newComponent);
	}
};
