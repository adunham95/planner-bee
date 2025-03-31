<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate } from '$app/navigation';
	import { addOnItems } from '$lib/addOnItems';
	import ECard from '$lib/components/ECard.svelte';
	import EcardEditComponent from '$lib/components/EcardEditComponent.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import DateInput from '$lib/components/Inputs/DateInput.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import { toCamelCase } from '$lib/utils/toCamelCase';
	import DisplayDivider from '../../../components/DisplayDivider.svelte';
	import DisplaySection from '../../../components/DisplaySection.svelte';
	import DisplayTitle from '../../../components/DisplayTitle.svelte';
	import ItemBanner from '../../../components/ItemBanner.svelte';

	let { data } = $props();

	console.log(data);

	let checkedOptions: string[] = $state([]);
	let subscriptionType: string[] = $state(['single']);

	let showAddContact: boolean = $state(false);
	$inspect(checkedOptions);

	$inspect(data);

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

		const response = await fetch('?/addContact', {
			method: 'POST',
			body: formData
		});

		let result = await response.json();
		let resultData = JSON.parse(result.data);

		firstName = '';
		lastName = '';
		email = '';
		phone = '';

		console.log({ resultData, result });
	}
</script>

<ItemBanner
	name={`${data.product?.name} ECard`}
	price={data.product?.cost}
	description={data.product?.description}
	formName="add-to-cart"
	buttonText="Continue"
/>

<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-4">
	<form
		method="POST"
		id="add-to-cart"
		action="?/addToCart"
		use:enhance
		class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 relative"
	>
		<DisplaySection sectionTitle="ECard Details">
			{#snippet content()}
				<ECard
					components={data?.product?.components.map((c) => {
						return {
							id: c.id,
							ecardComponentID: c.ecardComponentID,
							style: c.customStyles || undefined,
							value: c.default || ''
						};
					})}
				/>
			{/snippet}

			{#snippet sidebarContent()}
				{#each data?.product.components.filter((c) => c.editable) as component}
					<div>
						<DisplayTitle title={component.label || ''} />
						<EcardEditComponent
							showLabel={false}
							name={component.key || toCamelCase(component.label)}
							label={component.label || undefined}
							bind:value={component.default}
							componentKey={component.ecardComponentID}
							options={component.options || ''}
						/>
						<DisplayDivider />
					</div>
				{/each}

				<fieldset>
					<DisplayTitle title="Enhancements" />
					<CheckCards
						passValue
						groupName="addOn"
						bind:checkedOptions
						options={addOnItems
							.filter((item) => item.type.includes('eCard'))
							.map((item) => ({
								id: item.sku,
								title: item.name,
								description: item.description,
								price: item.cost
							}))}
					/>
				</fieldset>
			{/snippet}
		</DisplaySection>

		<!-- Set & Send Section -->
		<!-- <DisplaySection sectionTitle="Set and Send">
			{#snippet sidebarContent()}
				<DisplayDivider />
				<DisplayTitle title="Set and Send" />
				<fieldset class="pb-4">
					<CheckCards
						type="radio"
						hideCheck
						passValue
						bind:checkedOptions={subscriptionType}
						groupName="event-guestCount"
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
				</fieldset>
			{/snippet}
		</DisplaySection> -->

		<!-- Checkout Section -->
		<DisplaySection sectionTitle="Add to Cart">
			{#snippet sidebarContent()}
				<DisplayDivider />
				<fieldset class="pb-4">
					<div class="flex justify-end">
						<button class="btn btn-lg" form="add-to-cart">Continue</button>
					</div>
				</fieldset>
			{/snippet}
		</DisplaySection>
	</form>
</div>
