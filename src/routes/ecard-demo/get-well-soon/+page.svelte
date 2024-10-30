<script>
	import ECard from '$lib/components/ECard.svelte';

	const components = [
		{
			id: '4',
			ecardComponentID: 'custom-color',
			style: ' ',
			value: '#A7C7E7'
		},
		{
			id: '3',
			ecardComponentID: 'banner',
			style: 'min-height: 300px;',
			value: '/images/mountains-banner-2.jpg'
		},
		{
			id: '1',
			ecardComponentID: 'title',
			style: ' ',
			value: 'Get Well Soon'
		},
		{
			id: '2',
			ecardComponentID: 'message',
			style: ' ',
			value: 'Thinking of you and wishing you comfort, strength, and a swift recovery.'
		}
	];

	const signatures = [
		{ name: 'Emily', message: 'Sending you lots of love and warm wishes for a speedy recovery!' },
		{ name: 'Michael', message: 'Hope each day brings you closer to feeling like yourself again!' },
		{
			name: 'Sophie',
			message: "Thinking of you and hoping you're resting up and feeling better soon!"
		},
		{ name: 'Daniel', message: 'Wishing you strength and good health as you recover. Take care!' },
		{ name: 'Grace', message: 'Can’t wait to see you back to your wonderful self. Get well soon!' },
		{ name: 'Oliver', message: 'Hang in there! We’re all rooting for you to feel better soon.' },
		{ name: 'Ava', message: 'You’re in my thoughts, and I’m sending you all the healing vibes!' },
		{ name: 'Liam', message: 'Take it easy and let yourself heal. We’re here for you!' },
		{ name: 'Mia', message: 'Rest up and know that you’re missed. Get well soon!' },
		{ name: 'Ethan', message: 'Wishing you peace, comfort, and quick healing. Take care!' }
	];
</script>

<ECard {components} mealTrainEnabled {signatures} />
