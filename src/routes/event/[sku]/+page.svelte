<script lang="ts">
	import { addOnItems } from '$lib/addOnItems.js';
	import ECard from '$lib/components/ECard.svelte';
	import EcardEditComponent from '$lib/components/EcardEditComponent.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import DateInput from '$lib/components/Inputs/DateInput.svelte';
	import { formatCurrency } from '$lib/utils/formatCurrency.js';
	import { toCamelCase } from '$lib/utils/toCamelCase.js';

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

<div class="bg-white sticky top-0 z-40">
	<div class="flex flex-col border-b border-gray-200 lg:border-0">
		<div aria-label="Offers" class="order-last lg:order-first">
			<div
				class="mx-auto max-w-7xl md:px-8 py-6 flex flex-col md:flex-row justify-between items-center"
			>
				<div class="mb-2 md:mb-0">
					<h1 class="text-2xl font-semibold text-gray-900">{data.product?.name}</h1>
					<p class="text-sm font-semibold text-brand-600">
						{formatCurrency(data.product?.cost || 0)}
					</p>
				</div>
				<button class="btn btn-lg" form="add-to-cart">Add To Cart</button>
			</div>
		</div>
	</div>
</div>

<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-4">
	<form
		id="add-to-cart"
		method="post"
		action="?/addToCart"
		class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 relative"
	>
		<!-- Event Details Section -->
		<div class="mt-8 relative lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
			<h2 class="sr-only">Event Details</h2>

			<img
				src={data.product?.imageURL}
				alt="App screenshot"
				width="2432"
				height="1442"
				class="rounded-md shadow-2xl ring-1 ring-gray-900/10 sticky top-[120px]"
			/>
		</div>
		<div class="lg:col-span-5">
			{#each data.product?.options.sort((a, b) => a.displayOrder - b.displayOrder) || [] as option}
				<fieldset class="">
					{@render title(option.label || '')}
					<EcardEditComponent
						showLabel={false}
						name={option.key || toCamelCase(option.label)}
						label={option.label || undefined}
						value={option.default || ''}
						componentKey={option.componentID}
						options={option.options || ''}
					/>
				</fieldset>

				{@render divider()}
			{/each}

			<fieldset>
				{@render title('Guest Count')}
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

			{@render divider()}

			<fieldset>
				{@render title('Event Date')}
				<DateInput id="event-date" label="Event Date" />
			</fieldset>

			{@render divider()}

			<fieldset>
				{@render title('Enhancements')}
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
		</div>

		<!-- Invitation Details -->
		<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3">
			<h2 class="sr-only">Event Details</h2>
			<div class="sticky">
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
			</div>
		</div>
		<div class="lg:col-span-5">
			{@render divider()}
			<fieldset class="pb-4">
				{@render title('Invitation')}
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
		</div>

		<!-- Checkout Section -->
		<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3">
			<h2 class="sr-only">Checkout</h2>
		</div>
		<div class="lg:col-span-5">
			{@render divider()}
			<fieldset class="pb-4">
				<div class="flex justify-end">
					<button class="btn btn-lg" form="add-to-cart">Add to cart</button>
				</div>
			</fieldset>
		</div>
	</form>
</div>

{#snippet title(title: string, subTitle?: string)}
	<h2 class="text-xl font-medium text-gray-900 pb-2">{title}</h2>
	{#if subTitle}
		<p class="text-sm text-brand-500 pb-2">{subTitle}</p>
	{/if}
{/snippet}

{#snippet divider()}
	<hr class="border-t border-gray-200 my-10" />
{/snippet}
