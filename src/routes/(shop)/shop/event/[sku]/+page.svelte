<script lang="ts">
	import { addOnItems } from '$lib/addOnItems.js';
	import ECard from '$lib/components/ECard.svelte';
	import EcardEditComponent from '$lib/components/EcardEditComponent.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import DateInput from '$lib/components/Inputs/DateInput.svelte';
	import { toCamelCase } from '$lib/utils/toCamelCase.js';
	import DisplayDivider from '../../../components/DisplayDivider.svelte';
	import DisplaySection from '../../../components/DisplaySection.svelte';
	import DisplayTitle from '../../../components/DisplayTitle.svelte';
	import ItemBanner from '../../../components/ItemBanner.svelte';

	let { data } = $props();
	console.log({ data });

	let checkedOptions: string[] = $state([]);
	$inspect(checkedOptions);

	const placeholderPotluckOptions = [
		{ id: '1', title: 'Placeholder 1' },
		{ id: '2', title: 'Placeholder 2' },
		{ id: '3', title: 'Placeholder 3' },
		{ id: '4', title: 'Placeholder 4' }
	];
</script>

<ItemBanner
	name={data.product?.name}
	price={data.product?.cost}
	formName="add-to-cart"
	description={data.product?.description}
/>

<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-4">
	<form
		id="add-to-cart"
		method="post"
		action="?/addToCart"
		class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 relative"
	>
		<!-- Event Details Section -->
		<DisplaySection sectionTitle="Event Details">
			{#snippet content()}
				<img
					src={data.product?.imageURL}
					alt="App screenshot"
					width="2432"
					height="1442"
					class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
				/>
			{/snippet}
			{#snippet sidebarContent()}
				{#each data.product?.options.sort((a, b) => a.displayOrder - b.displayOrder) || [] as option}
					<fieldset class="">
						<DisplayTitle title={option.label || ''} />
						<EcardEditComponent
							showLabel={false}
							name={option.key || toCamelCase(option.label)}
							label={option.label || undefined}
							value={option.default || ''}
							componentKey={option.componentID}
							options={option.options || ''}
						/>
					</fieldset>

					<DisplayDivider />
				{/each}

				<fieldset>
					<DisplayTitle title="Guest Count" />
					<CheckCards
						hideCheck
						type="radio"
						groupName="event-guestCount"
						options={[
							{
								id: '10',
								title: '0-10 Guests',
								checked: true
							},
							{
								id: '25',
								title: '10-25 Guests'
							},
							{
								id: '50',
								title: '25-50 Guests'
							},
							{
								id: '100',
								title: '50-100 Guests'
							},
							{
								id: 'all',
								title: '100+ Guests'
							}
						]}
					/>
				</fieldset>

				<DisplayDivider />

				<fieldset>
					<DisplayTitle title="Event Date" />
					<DateInput id="event-date" label="Event Date" />
				</fieldset>

				<DisplayDivider />

				<fieldset>
					<DisplayTitle title="Enhancements" />
					<CheckCards
						bind:checkedOptions
						options={addOnItems
							.filter((item) => item.type.includes('event'))
							.map((item) => ({
								id: `addon-${item.sku}`,
								title: item.name,
								description: item.description,
								price: item.cost
							}))}
					/>
				</fieldset>
			{/snippet}
		</DisplaySection>

		<!-- Invitation Details -->
		<DisplaySection sectionTitle="Invitation Details">
			{#snippet content()}
				<ECard
					rsvpEnabled={checkedOptions.includes('addon-RSVP')}
					mealTrainEnabled={checkedOptions.includes('addon-MLTR')}
					brandingEnabled={!checkedOptions.includes('addon-RMBD')}
					potluckOptions={checkedOptions.includes('addon-POTS') ? placeholderPotluckOptions : []}
					components={data.product?.invitation?.components.map((c) => {
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
				<DisplayDivider />
				<fieldset class="pb-4">
					<DisplayTitle title="Invitation" />
					{#each data.product?.invitation?.components || [] as option}
						<EcardEditComponent
							showLabel={true}
							name={option.key || toCamelCase(option.label)}
							label={option.label || undefined}
							value={option.default || ''}
							componentKey={option.ecardComponentID}
							options={option.options || ''}
						/>
					{/each}
				</fieldset>
			{/snippet}
		</DisplaySection>

		<!-- Checkout Section -->
		<DisplaySection sectionTitle="Add to Cart">
			{#snippet sidebarContent()}
				<DisplayDivider />
				<fieldset class="pb-4">
					<div class="flex justify-end">
						<button class="btn btn-lg" form="add-to-cart">Add to cart</button>
					</div>
				</fieldset>
			{/snippet}
		</DisplaySection>
	</form>
</div>
