import prisma from '$lib/prisma';
import { error } from 'console';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { logAllFormData } from '$lib/utils/logAllFormData';
import { EOrderType } from '$lib/utils/types';

export const load: PageServerLoad = async (event) => {
	// console.log({ user: event.locals });
	const { sku } = event.params;
	// if (!event.locals.user) redirect(302, '/login');

	const product = await prisma.eventTheme.findFirst({
		where: {
			sku
		},
		include: {
			options: true,
			invitation: { include: { components: true } }
		}
	});

	console.log({ product });

	if (!product) {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		product
	};
};

export const actions: Actions = {
	addToCart: async ({ request, cookies, params }) => {
		const { sku } = params;
		const data = await request.formData();
		logAllFormData(data);

		const themeData = await prisma.eventTheme.findFirst({ where: { sku } });
		console.log({ themeData });

		const addedSKUs: string[] = [];
		const inviteSku: string | undefined = undefined;

		const cartOptions: { key: string; value: string }[] = [];
		const inviteOptions: { key: string; value: string }[] = [];

		for (const pair of data.entries()) {
			const [key, value] = pair;
			if (key.startsWith('addon')) {
				const [, sku] = key.split('-');
				addedSKUs.push(sku);
			}
			cartOptions.push({
				key,
				value: value.toString()
			});
			console.log(pair[0], pair[1]);
		}

		console.log('dataEntries', [...data.entries()]);
		console.log('cartOptions', cartOptions);
		console.log('addedSKUs', addedSKUs);
		console.log('inviteSku', inviteSku);
		console.log('inviteOptions', inviteOptions);

		let cartID = cookies.get('cart');

		console.log('cartID', { cartID, addedSKUs });

		const eventDateData = cartOptions.find((c) => c.key === 'event-date')?.value;
		const eventDate = eventDateData ? new Date(eventDateData) : null;

		console.log({ eventDateData, eventDate });

		if (!cartID) {
			const cart = await prisma.order.create({
				data: {}
			});

			cartID = cart.id;
			cookies.set('cart', cartID || '', { path: '/', maxAge: 86400 });
		}

		const event = await prisma.event.create({
			data: {
				orderID: cartID,
				eventTemplateSku: sku,
				invitationSku: themeData?.eCardSku,
				eventDate,
				addOns: addedSKUs
			}
		});

		const eventOptions = await prisma.eventOption.createMany({
			data: cartOptions.map((opt) => ({
				eventId: event.id,
				...opt
			}))
		});

		console.log({ event, eventOptions });

		// redirect(303, '/cart');
	}
};
