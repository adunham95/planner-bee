<script>
	import BentoBox from '$lib/components/BentoBox.svelte';
	import ActionSlot from '$lib/components/Marketing/ActionSlot.svelte';
	import FeatureList from '$lib/components/Marketing/FeatureList.svelte';
	import HeroImages from '$lib/components/Marketing/HeroImages.svelte';
	import NewsletterSignUp from '$lib/components/Marketing/NewsletterSignUp.svelte';
	import PromoCard from '$lib/components/Marketing/PromoCard.svelte';

	let { data, form } = $props();
	console.log({ data, form });
</script>

<!-- Sending Smiles, One Click at a Time -->

<HeroImages
	title="Create, Send, and Celebrate"
	subTitle="Make every occasion special with our all-in-one digital platform for invitations, RSVPs, and event planning. Whether it’s a birthday, wedding, business event, or holiday celebration, we make it easy to connect with your guests in a meaningful way."
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
	description="Never miss an important event. Create, send and celebrate all your special events"
/>

<!-- <ActionSlot /> -->

<NewsletterSignUp
	success={form && form?.success ? form?.message : undefined}
	error={form && !form?.success ? form?.message : undefined}
/>

<!-- <BentoBox
	boxes={[
		{
			title: 'Box 1',
			imgUrl: 'https://tailwindcss.com/plus/img/component-images/bento-01-performance.png',
			width: 4,
			header: 'Power the world!',
			description: 'Something is a long'
		},
		{
			title: 'Box 2',
			imgUrl: 'https://tailwindcss.com/plus/img/component-images/bento-01-performance.png',
			width: 2,
			header: 'ULTRA POWER!',
			description: 'Something is a long'
		},
		{
			title: 'Box 2',
			imgUrl: 'https://tailwindcss.com/plus/img/component-images/bento-01-network.png',
			width: 2,
			header: 'ULTRA POWER!',
			description: 'Something is a long'
		},
		{
			title: 'Box 1',
			imgUrl: 'https://tailwindcss.com/plus/img/component-images/bento-01-performance.png',
			width: 4,
			header: 'Power the world!',
			description: 'Something is a long'
		}
	]}
/> -->
