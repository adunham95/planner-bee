import prisma from '$lib/prisma';
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	emailSignUp: async (event) => {
		const formData = await event.request.formData();

		const email = formData.get('email');

		//TODO Validate email
		if (!email || typeof email !== 'string') {
			return fail(400, { message: 'Invalid job status' });
		}

		try {
			const newContact = await prisma.newsletterSignUp.create({
				data: {
					email
				}
			});
			console.log({ newContact });
		} catch (error) {
			console.log(error);
			return fail(400, { message: 'Error saving email' });
		}

		return { message: 'Added to contact list', success: true };
	}
};
