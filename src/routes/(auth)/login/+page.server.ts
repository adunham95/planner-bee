import { lucia } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { verify } from '@node-rs/argon2';
import prisma from '$lib/prisma';

import type { Actions } from './$types';

export const actions: Actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		console.log('auth', { email, password });

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

		const existingUser = await prisma.user.findUnique({ where: { email } });
		if (!existingUser) {
			return fail(400, {
				message: 'Incorrect email or password'
			});
		}

		const validPassword = await verify(existingUser.password_hash, password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});
		if (!validPassword) {
			return fail(400, {
				message: 'Incorrect email or password'
			});
		}

		const session = await lucia.createSession(existingUser.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		//TODO convert to progressive enhancement
		redirect(302, '/');
	}
};
