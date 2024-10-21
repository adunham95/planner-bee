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
		editComponentKey: 'colorInput',
		displayComponentKey: 'color'
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
	},
	{
		id: 'banner',
		name: 'Banner',
		description: 'Add a banner image',
		editComponentKey: 'text',
		displayComponentKey: 'banner'
	}
];
