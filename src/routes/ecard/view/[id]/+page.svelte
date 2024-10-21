<script>
	import ECard from '$lib/components/ECard.svelte';

	const components = [
		{
			id: '3',
			ecardComponentID: 'banner',
			style: ' ',
			value: '/images/mountains-banner-2.jpg'
		},
		{
			id: '1',
			ecardComponentID: 'title',
			style: ' ',
			value: 'Hello World'
		},
		{
			id: '2',
			ecardComponentID: 'message',
			style: ' ',
			value: 'Welcome to my Hello World app!'
		}
	];
</script>

<ECard style="min-height: calc(100vh - 65px - 252px)" {components} />
