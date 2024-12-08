<script lang="ts">
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

<!-- <div
	class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
>
	<div>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			Technical Specifications
		</h2>
		<p class="mt-4 text-gray-500">
			The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The
			powder coated steel divider separates active cards from new ones, or can be used to archive
			important task lists.
		</p>

		<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Origin</dt>
				<dd class="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Material</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Solid walnut base with rare earth magnets and powder coated steel card cover
				</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Dimensions</dt>
				<dd class="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Finish</dt>
				<dd class="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Includes</dt>
				<dd class="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Considerations</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Made from natural materials. Grain and color vary with each item.
				</dd>
			</div>
		</dl>
	</div>
	<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-01.jpg"
			alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
			class="rounded-lg bg-gray-100"
		/>
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg"
			alt="Top down view of walnut card tray with embedded magnets and card groove."
			class="rounded-lg bg-gray-100"
		/>
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg"
			alt="Side of walnut card tray with card groove and recessed card area."
			class="rounded-lg bg-gray-100"
		/>
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
			alt="Walnut card tray filled with cards and card angled in dedicated groove."
			class="rounded-lg bg-gray-100"
		/>
	</div>
</div> -->

<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-4">
	<div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
		<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
			<h2 class="sr-only">Images</h2>

			<!-- <img
				src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg"
				alt="Back of women&#039;s Basic Tee in black."
				class="rounded-lg lg:col-span-2 lg:row-span-2 max-h-[400px] w-full sticky top-9"
			/> -->

			<img
				src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
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
						options={[
							{
								id: 'removeBranding',
								title: 'Remove Branding',
								description: 'Remove the planner bee branding',
								price: 199
							},
							{
								id: 'rsvp',
								title: 'RSVP List',
								description: 'Add an RSVP box with your event',
								price: 199
							}
						]}
					/>
				</fieldset>

				{@render divider()}
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
