<script lang="ts">
	import Container from '$lib/components/Containers/container.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import DisplayTitle from '../../../components/DisplayTitle.svelte';
	import ItemBanner from '../../../components/ItemBanner.svelte';

	const { data } = $props();

	let subscriptionType: string[] = $state(['single']);
</script>

<ItemBanner
	name={`${data.eCard.eCardTemplate.name} ECard`}
	price={data.eCard.eCardTemplate?.cost}
	description={data.eCard.eCardTemplate?.description}
	formName="add-to-cart"
	buttonText="Continue"
/>

<Container className="py-8">
	<div>
		<DisplayTitle title="Set & Send" />
		<CheckCards
			className="grid grid-cols-4"
			type="radio"
			hideCheck
			passValue
			bind:checkedOptions={subscriptionType}
			groupName="sendSendType"
			options={[
				{
					id: 'single',
					title: 'Single',
					description: 'Send a single card, one time'
				},
				{
					id: 'schedule',
					title: 'Schedule',
					description: 'Send a recurring order, on a set schedule'
				},
				{
					id: 'event',
					title: 'Event Based',
					description: 'Send a eCard based on an contacts event, birthday, anniversary, etc'
				}
			]}
		/>
	</div>
	<div>
		<DisplayTitle title="Set Timeline" />
		<CheckCards
			className="grid grid-cols-4"
			type="radio"
			hideCheck
			passValue
			groupName="sendSendTime"
			options={[
				{
					id: 'now',
					title: 'Send Now',
					description: 'Send your eCard now',
					checked: true
				},
				{
					id: 'later',
					title: 'Send Later',
					description: 'Schedule your eCard for delivery'
				}
			]}
		/>
	</div>
	<div>
		<DisplayTitle title="Recipients" />
		<CheckCards
			className="grid grid-cols-4"
			type="checkbox"
			hideCheck
			passValue
			groupName="recipients"
			options={data.contacts.map((c) => {
				return {
					id: c.id,
					title: `${c.firstName} ${c.lastName}`,
					description: `${c.email} | ${c.phone}`
				};
			})}
		/>
	</div>
</Container>
