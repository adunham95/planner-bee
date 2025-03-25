<script lang="ts">
	import { addOnItems } from '$lib/addOnItems.js';
	import EcardEditComponent from '$lib/components/EcardEditComponent.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import { formatCurrency } from '$lib/utils/formatCurrency.js';

	export let data;
	console.log({ data });
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
	<div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
		<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
			<h2 class="sr-only">Images</h2>

			<img
				src={data.product?.imageURL}
				alt="App screenshot"
				width="2432"
				height="1442"
				class="rounded-md shadow-2xl ring-1 ring-gray-900/10 sticky top-[120px]"
			/>
		</div>
		<div class="lg:col-span-5">
			<form id="add-to-cart" method="post" action="?/addToCart">
				{#each data.product?.options.sort((a, b) => a.displayOrder - b.displayOrder) || [] as option}
					<fieldset class="">
						{@render title(option.label || '')}
						<EcardEditComponent
							showLabel={false}
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
						groupName="guestCount"
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
					{@render title('Enhancements')}
					<CheckCards
						options={addOnItems
							.filter((item) => item.type.includes('event'))
							.map((item) => ({
								id: `sku-${item.sku}`,
								title: item.name,
								description: item.description,
								price: item.cost
							}))}
					/>
				</fieldset>

				{@render divider()}

				<fieldset class="pb-4">
					{@render title('Invitation')}
					<input
						hidden
						class="hidden"
						id="invite-sku"
						name="invite-sku"
						value={data.product?.invitation?.sku}
					/>
					{#each data.product?.invitation?.components || [] as option}
						<EcardEditComponent
							idPrefix="invite"
							showLabel={true}
							label={option.label || undefined}
							value={option.default || ''}
							componentKey={option.ecardComponentID}
							options={option.options || ''}
						/>
					{/each}
				</fieldset>

				<div class="flex justify-end">
					<button class="btn btn-lg" form="add-to-cart">Add to cart</button>
				</div>
			</form>
		</div>
	</div>
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
