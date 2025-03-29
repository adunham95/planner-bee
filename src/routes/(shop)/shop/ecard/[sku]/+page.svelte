<script lang="ts">
	import { enhance } from '$app/forms';
	import { addOnItems } from '$lib/addOnItems';
	import ECard from '$lib/components/ECard.svelte';
	import EcardEditComponent from '$lib/components/EcardEditComponent.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import { toCamelCase } from '$lib/utils/toCamelCase';
	import DisplayDivider from '../../../components/DisplayDivider.svelte';
	import DisplaySection from '../../../components/DisplaySection.svelte';
	import DisplayTitle from '../../../components/DisplayTitle.svelte';
	import ItemBanner from '../../../components/ItemBanner.svelte';

	let { data } = $props();

	console.log(data);

	let checkedOptions: string[] = $state([]);
	$inspect(checkedOptions);
</script>

<ItemBanner
	name={`${data.product?.name} ECard`}
	price={data.product?.cost}
	description={data.product?.description}
	formName="add-to-cart"
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
							value={component.default || ''}
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

		<!-- Checkout Section -->
		<DisplaySection sectionTitle="Add to Cart">
			{#snippet sidebarContent()}
				<fieldset class="pb-4">
					<div class="flex justify-end">
						<button class="btn btn-lg" form="add-to-cart">Add to cart</button>
					</div>
				</fieldset>
			{/snippet}
		</DisplaySection>
	</form>
</div>
