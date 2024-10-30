import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
	const basicEcard = await prisma.eCardTemplate.upsert({
		where: { sku: 'BSEC' },
		update: {},
		create: {
			sku: 'BSEC',
			name: 'Basic ECard',
			description: 'A basic ecard',
			cost: 0,
			components: {
				create: [
					{
						ecardComponentID: 'title',
						label: 'Title',
						editable: true,
						default: 'Hello World'
					},
					{
						ecardComponentID: 'message',
						label: 'Message',
						editable: true,
						default: 'This is my wonderful hello world'
					}
				]
			}
		}
	});

	const christmasEcard = await prisma.eCardTemplate.upsert({
		where: { sku: 'CHST' },
		update: {},
		create: {
			sku: 'CHST',
			name: 'Christmas',
			description: 'A christmas ecard',
			imageURL: '/images/christmas-tree.jpg',
			cost: 199,
			components: {
				create: [
					{
						ecardComponentID: 'banner',
						label: 'Banner',
						editable: false,
						default: '/images/mountains-banner.jpg'
					},
					{
						ecardComponentID: 'title',
						label: 'Title',
						editable: true,
						default: 'Merry Christmas'
					},
					{
						ecardComponentID: 'message',
						label: 'Message',
						editable: true,
						default: 'Merry Christmas to you and your family!'
					}
				]
			}
		}
	});

	const tacoTuesdayEcard = await prisma.eCardTemplate.upsert({
		where: { sku: 'TACO' },
		update: {},
		create: {
			sku: 'TACO',
			name: 'Taco Tuesday',
			description: 'Get your ready for your taco tuesday',
			imageURL: '/images/tacos.jpg',
			cost: 199,
			components: {
				create: [
					{
						ecardComponentID: 'custom-color',
						label: 'Color',
						editable: false,
						default: '#388E3C'
					},
					{
						ecardComponentID: 'banner',
						label: 'Banner',
						editable: false,
						customStyles: 'min-height: 300px;',
						default: '/images/tacos.jpg'
					},
					{
						ecardComponentID: 'title',
						label: 'Title',
						editable: true,
						default: '🌮 Its Taco Tuesday! 🌮'
					},
					{
						ecardComponentID: 'message',
						label: 'Message',
						editable: true,
						default: "It's Taco Tuesday time to guac and roll!."
					}
				]
			}
		}
	});

	const getWellEcard = await prisma.eCardTemplate.upsert({
		where: { sku: 'GWEL' },
		update: {},
		create: {
			sku: 'GWEL',
			name: 'Get Well',
			description: 'Send a message of encouragement',
			imageURL: '/images/mountains-banner.jpg',
			cost: 0,
			components: {
				create: [
					{
						ecardComponentID: 'custom-color',
						label: 'Color',
						editable: false,
						default: '#A7C7E7'
					},
					{
						ecardComponentID: 'banner',
						label: 'Banner',
						editable: false,
						customStyles: 'min-height: 300px;',
						default: '/images/mountains-banner-2.jpg'
					},
					{
						ecardComponentID: 'title',
						label: 'Title',
						editable: true,
						default: 'Get Well Soon'
					},
					{
						ecardComponentID: 'message',
						label: 'Message',
						editable: true,
						default: 'Thinking of you and wishing you comfort, strength, and a swift recovery.'
					}
				]
			}
		}
	});

	console.log({ basicEcard, christmasEcard, tacoTuesdayEcard, getWellEcard });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
