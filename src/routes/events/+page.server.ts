import { addOnItems } from '$lib/addOnItems';
import prisma from '$lib/prisma';
import { EOrderType } from '$lib/utils/types';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user) redirect(302, '/login');

	const orders = await prisma.order.findMany({
		where: {
			orderType: EOrderType.event,
			OR: [
				{
					senderID: {
						equals: locals.user.id
					}
				},
				{
					senderEmail: {
						equals: locals.user.email
					}
				}
			]
		},
		include: {
			recipients: true,
			products: {
				include: {
					ecard: true,
					eventTheme: true,
					options: true
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
		myEvents: data
	};
};
