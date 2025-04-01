<script lang="ts">
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Containers/container.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import DisplayTitle from '../../../components/DisplayTitle.svelte';
	import ItemBanner from '../../../components/ItemBanner.svelte';

	const { data } = $props();

	$inspect(data);

	let subscriptionType: string[] = $state(['single']);

	let recipients: {
		firstName: string | null;
		lastName: string | null;
		phone: string | null;
		email: string | null;
	}[] = $state(data.recipients);

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let phone = $state('');

	async function addNewUser() {
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
		formData.append('phone', phone);

		const response = await fetch('?/createRecipient', {
			method: 'POST',
			body: formData
		});

		let result = await response.json();
		let resultData = JSON.parse(result.data);
		recipients.push({ firstName, lastName, email, phone });

		firstName = '';
		lastName = '';
		email = '';
		phone = '';

		console.log({ resultData, result });
	}
</script>

<ItemBanner
	name={`${data.eCard.eCardTemplate.name} ECard`}
	price={data.eCard.eCardTemplate?.cost}
	description={data.eCard.eCardTemplate?.description}
	formName="add-to-cart"
	buttonText="Add To Cart"
	imageURL={data.eCard.eCardTemplate.imageURL}
/>

<Container className="py-8">
	<form method="POST" id="add-to-cart" action="?/addToCart" use:enhance>
		<div>
			<DisplayTitle title="Set & Send" />
			<CheckCards
				className="grid grid-cols-2 md:grid-cols-4"
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
						description: 'Send a recurring order, on a set schedule (coming soon)',
						disabled: true
					},
					{
						id: 'event',
						title: 'Event Based',
						description:
							'Send a eCard based on an contacts event, birthday, anniversary, etc (coming soon)',
						disabled: true
					}
				]}
			/>
		</div>
		<div>
			<DisplayTitle title="Set Timeline" />
			<CheckCards
				className="grid grid-cols-2 md:grid-cols-4"
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
						description: 'Schedule your eCard for delivery (coming soon)',
						disabled: true
					}
				]}
			/>
		</div>
		<div>
			<DisplayTitle title="Create One Time Recipients" />
			<div class="grid grid-cols-2 gap-1 pb-2">
				<TextInput
					label="First Name"
					id="firstName"
					placeholder="First name"
					bind:value={firstName}
				/>
				<TextInput label="Last Name" id="lastName" placeholder="Last name" bind:value={lastName} />
				<TextInput label="Email" id="email" placeholder="Email" bind:value={email} />
				<TextInput label="Phone" id="phone" placeholder="Phone" bind:value={phone} />
				<button onclick={addNewUser} type="button" class="btn">Add Contact</button>
			</div>
			<CheckCards
				className="grid grid-cols-2 md:grid-cols-4"
				type="checkbox"
				hideCheck
				passValue
				groupName="recipients"
				options={recipients.map((c) => {
					return {
						id: `${c.firstName} ${c.lastName}`,
						title: `${c.firstName} ${c.lastName}`,
						description: `${c.email} | ${c.phone}`,
						disabled: true,
						checked: true
					};
				})}
			/>
			<DisplayTitle title="Select Current Contacts" />
			<CheckCards
				className="grid grid-cols-2 md:grid-cols-4"
				type="checkbox"
				hideCheck
				passValue
				groupName="contacts"
				options={data.contacts.map((c) => {
					return {
						id: c.id,
						title: `${c.firstName} ${c.lastName}`,
						description: `${c.email} | ${c.phone}`
					};
				})}
			/>
		</div>
	</form>
</Container>
