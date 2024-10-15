export const eCardComponents = [
	{
		id: 'color-editor',
		name: 'Color',
		description: 'Pick a color',
		editComponentKey: 'colorPicker',
		displayComponentKey: 'color',
		options: [{ id: '#ff0000', title: 'Red' }]
	},
	{
		id: 'custom-color',
		name: 'Custom Color',
		description: 'Pick a color',
		editComponentKey: 'colorPicker',
		displayComponentKey: 'color',
		options: [
			{ id: '#FF4500', title: 'Orange Red' },
			{ id: '#FFFAFA', title: 'Snow' },
			{ id: '#FFF8DC', title: 'Cornsilk' },
			{ id: '#A0522D', title: 'Sienna' },
			{ id: '#D2691E', title: 'Chocolate' }
		]
	},
	{
		id: 'title',
		name: 'Title',
		description: 'Display a title',
		editComponentKey: 'text',
		displayComponentKey: 'title'
	},
	{
		id: 'message',
		name: 'Message',
		description: 'Write a custom message',
		editComponentKey: 'textArea',
		displayComponentKey: 'message'
	}
];
