<script>
	import ECard from '$lib/components/ECard.svelte';

	const components = [
		{
			id: '4',
			ecardComponentID: 'custom-color',
			style: ' ',
			value: '#721422'
		},
		{
			id: '3',
			ecardComponentID: 'banner',
			style: 'min-height: 300px;',
			value: '/images/tacos.jpg'
		},
		{
			id: '1',
			ecardComponentID: 'title',
			style: ' ',
			value: '🌮 It’s Taco Tuesday! 🌮'
		},
		{
			id: '2',
			ecardComponentID: 'message',
			style: ' ',
			value:
				"It's Taco Tuesday time to guac and roll!. See you at our house! Don't forgot to sign up to bring something "
		}
	];

	const potluckItems = [
		{ id: '1', title: 'Taco Meat' },
		{ id: '2', title: 'Queso' },
		{ id: '3', title: 'Soft Shells' },
		{ id: '4', title: 'Hard Shells' },
		{ id: '5', title: 'Drinks' },
		{ id: '6', title: 'Shredded Cheese' },
		{ id: '7', title: 'Sour Cream' },
		{ id: '8', title: 'Lettuce' },
		{ id: '9', title: 'Tomatoes' },
		{ id: '10', title: 'Chips' },
		{ id: '11', title: 'Dessert' },
		{ id: '12', title: 'Dessert' }
	];
</script>

<ECard {components} potluckOptions={potluckItems} />
