<script>
	import ActionSlot from '$lib/components/Marketing/ActionSlot.svelte';
	import FeatureList from '$lib/components/Marketing/FeatureList.svelte';
	import Hero from '$lib/components/Marketing/Hero.svelte';
	import ProductFeatureSlot from '$lib/components/Marketing/ProductFeatureSlot.svelte';
	import PromoCard from '$lib/components/Marketing/PromoCard.svelte';

	export let data;
	console.log({ data });
</script>

<!-- Sending Smiles, One Click at a Time -->

<Hero
	title="Send Joy in an Instant"
	subTitle="Beautiful, Personalized eCards for Every Occasion. Fast, and filled with heart. Whether it's a birthday, holiday, or just because, find the perfect eCard and send it in seconds."
/>

<FeatureList
	title="All In One eCards"
	description="Automation, Invitation, Collaboration and Customization. Send and celebrate with our eCards"
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
		}
	]}
/>

<PromoCard
	bgImage="/images/happy.jpg"
	title="Level Up Holidays"
	description="Never miss an important event. Find the perfect eCard and send it in seconds"
/>

<ActionSlot />
