import prisma from '$lib/prisma';
import { fail } from '@sveltejs/kit';

import type { Actions } from './$types';
import { hash } from '@node-rs/argon2';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		if (typeof email !== 'string' || email.length < 3 || email.length > 31) {
			return fail(400, {
				message: 'Invalid email'
			});
		}
		if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
			return fail(400, {
				message: 'Invalid password'
			});
		}

		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		await prisma.user.update({ where: { email: email }, data: { password_hash: passwordHash } });

		return {
			success: true,
			message: 'Password Updated Successfully'
		};
	}
};
