import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { addOnItems } from '$lib/addOnItems';

export const load: PageServerLoad = async (event) => {
	if (!event.locals.user) redirect(302, '/login');

	const orders = await prisma.order.findMany({
		where: {
			OR: [
				{
					senderID: {
						equals: event.locals.user.id
					}
				},
				{
					senderEmail: {
						equals: event.locals.user.email
					}
				}
			]
		},
		include: {
			recipients: true,
			products: {
				include: {
					ecard: true,
					eventTheme: true
				}
			}
		}
	});

	const data = orders.map((order) => {
		return {
			...order,
			products: order.products.map((p) => {
				const addOn = addOnItems.find((i) => i.sku === p.addOnSku);
				return {
					...p,
					addOn
				};
			})
		};
	});

	return {
		orders: data
	};
};
