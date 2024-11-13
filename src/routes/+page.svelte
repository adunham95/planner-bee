<script>
	import BentoBox from '$lib/components/BentoBox.svelte';
	import ActionSlot from '$lib/components/Marketing/ActionSlot.svelte';
	import FeatureList from '$lib/components/Marketing/FeatureList.svelte';
	import HeroImages from '$lib/components/Marketing/HeroImages.svelte';
	import PromoCard from '$lib/components/Marketing/PromoCard.svelte';

	let { data } = $props();
	console.log({ data });
</script>

<!-- Sending Smiles, One Click at a Time -->

<HeroImages
	title="Build Joy in an Instant"
	subTitle="Beautiful, Personalized eCards for Every Occasion. Fast, and filled with heart. Whether it's a birthday, holiday, or just because, find the perfect eCard and send it in seconds."
	images={[
		'/images/meal.jpg',
		'/images/meal-packing.jpg',
		'/images/rsvp.jpg',
		'/images/card-flower.jpg',
		'/images/christmas-tree.jpg'
	]}
/>

<FeatureList
	title="All In One events"
	description="Automation, Invitation, Collaboration and Customization. Send and celebrate with our events"
	featureList={[
		{
			title: 'Automation',
			description: 'Create a list of birthdays, well make sure they arrive on time',
			comingSoon: true
		},
		{
			title: 'Invitation',
			description: 'Curate the perfect guest list. Well take care of the contact',
			comingSoon: true
		},
		{
			title: 'Collaboration',
			description:
				"Don't worry about passing the card around to all the family. Give us a list, well make sure they sign",
			comingSoon: true
		},
		{
			title: 'Customization',
			description: 'Customize with a custom message, and colors to make the perfect eCard'
		},
		{
			title: 'Contacts',
			description:
				"Save a list of contacts so you don't have to hunt down emails or phone numbers any more",
			comingSoon: true
		},
		{
			title: 'Schedule',
			description: 'PreSchedule cards to out on when you want',
			comingSoon: true
		},
		{
			title: 'Adaption',
			description: 'Use our library of add ons to customize your event',
			comingSoon: true
		}
	]}
/>

<PromoCard
	bgImage="/images/happy.jpg"
	title="Level Up Holidays"
	description="Never miss an important event. Find the perfect eCard and send it in seconds"
/>

<ActionSlot />

<BentoBox
	boxes={[
		{
			title: 'Box 1',
			imgUrl: 'https://tailwindui.com/plus/img/component-images/bento-01-performance.png',
			width: 4,
			header: 'Power the world!',
			description: 'Something is a long'
		},
		{
			title: 'Box 2',
			imgUrl: 'https://tailwindui.com/plus/img/component-images/bento-01-performance.png',
			width: 2,
			header: 'ULTRA POWER!',
			description: 'Something is a long'
		},
		{
			title: 'Box 2',
			imgUrl: 'https://tailwindui.com/plus/img/component-images/bento-01-network.png',
			width: 2,
			header: 'ULTRA POWER!',
			description: 'Something is a long'
		},
		{
			title: 'Box 1',
			imgUrl: 'https://tailwindui.com/plus/img/component-images/bento-01-performance.png',
			width: 4,
			header: 'Power the world!',
			description: 'Something is a long'
		}
	]}
/>
