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
	}
];

export const addOnItems = [
	{
		name: 'Collaboration',
		description: 'Pre send a list of users',
		path: '/add-on/collaboration',
		cost: 99,
		imageURL: '/images/coffee-table.jpg'
	},
	{
		name: 'RSVP List',
		description: '',
		path: '/add-on/rsvp',
		cost: 199,
		imageURL: '/images/rsvp.jpg'
	},
	{
		name: 'Meal Train',
		description: '',
		path: '/add-on/meal-train',
		cost: 199,
		imageURL: '/images/meal.jpg'
	}
];
