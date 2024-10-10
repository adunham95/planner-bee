import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { adapter } from '$lib/prisma';

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		console.log('attributes', attributes);
		return {
			// attributes has the type of DatabaseUserAttributes
			email: attributes.email
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	email: string;
}
