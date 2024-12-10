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
		price: 99
	},
	{
		id: 'tracking',
		title: 'Tracking',
		description:
			'Get notified when they view the eCard. If there are signatures, who has signed it',
		price: 99
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
		cost: 99,
		imageURL: '/images/coffee-table.jpg'
	},
	{
		name: 'RSVP List',
		sku: 'RSVP',
		description: 'Add an RSVP box',
		path: '/add-on/rsvp',
		cost: 99,
		imageURL: '/images/rsvp.jpg'
	},
	{
		name: 'Meal Train',
		sku: 'MLTR',
		description: 'Add meal train sign up',
		path: '/add-on/meal-train',
		cost: 99,
		imageURL: '/images/meal-packing.jpg'
	},
	{
		name: 'Potluck Sign Up',
		sku: 'POTS',
		description: 'Add a sign up for ',
		path: '/add-on/meal-train',
		cost: 99,
		imageURL: '/images/meal.jpg'
	},
	{
		name: 'Remove Branding',
		sku: 'RMBD',
		description: 'Remove the planner bee branding',
		path: '/add-on/meal-train',
		cost: 299,
		imageURL: '/images/meal.jpg'
	}
];
