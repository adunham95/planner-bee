export const enhancementItems = [
	{
		id: 'signatures',
		title: 'Signatures',
		description: 'Allow people to add signatures and messages',
		checked: true
	},
	{
		id: 'removeBranding',
		title: 'Remove Branding',
		description: 'Remove the PlannerBeeCard card branding',
		price: 199
	},
	{
		id: 'tracking',
		title: 'Tracking',
		description:
			'Get notified when they view the eCard. If there are signatures, who has signed it',
		price: 199
	},
	{
		id: 'private',
		title: 'Privacy',
		description: 'Only let the people who have the access code sign view/sign the eCard',
		price: 0
	}
];

export const addOnItems = [
	{
		name: 'Collaboration',
		sku: 'COLL',
		description: 'Pre send a list of users',
		path: '/add-on/collaboration',
		cost: 199,
		imageURL: '/images/coffee-table.jpg',
		type: ['eCard']
	},
	{
		name: 'RSVP & Tracking',
		sku: 'RSVP',
		description: 'Let users RSVP and track analytics',
		path: '/add-on/rsvp',
		cost: 199,
		imageURL: '/images/rsvp.jpg',
		type: ['event']
	},
	{
		name: 'Meal Train',
		sku: 'MLTR',
		description: 'Add meal train sign up',
		path: '/add-on/meal-train',
		cost: 199,
		imageURL: '/images/meal-packing.jpg',
		type: ['eCard', 'event']
	},
	{
		name: 'Potluck Sign Up',
		sku: 'POTS',
		description: 'Add a sign up for ',
		path: '/add-on/meal-train',
		cost: 199,
		imageURL: '/images/meal.jpg',
		type: ['event']
	},
	{
		name: 'Privacy',
		sku: 'PRCY',
		description: 'Only let the people who have the access code sign view',
		path: '/add-on/meal-train',
		cost: 199,
		imageURL: '/images/lock.jpg',
		type: ['eCard', 'event']
	},
	{
		name: 'Remove Branding',
		sku: 'RMBD',
		description: 'Remove the planner bee branding',
		path: '/add-on/meal-train',
		cost: 599,
		imageURL: '/images/meal.jpg',
		type: ['eCard', 'event']
	},
	{
		name: 'Disposable Camera',
		sku: 'DCAM',
		description: 'Allow Users to take photos and upload them to a slideshow',
		path: '/add-on/meal-train',
		cost: 999,
		imageURL: '/images/camera.jpg',
		type: ['event']
	}
];
