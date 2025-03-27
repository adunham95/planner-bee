<script lang="ts">
	import { enhance } from '$app/forms';
	import ECard from '$lib/components/ECard.svelte';
	import EcardEditComponent from '$lib/components/EcardEditComponent.svelte';
	import CheckCards from '$lib/components/Inputs/CheckCards.svelte';
	import Label from '$lib/components/Inputs/Label.svelte';
	import ProductSlice from '$lib/components/ProductSlice.svelte';

	let { data } = $props();

	console.log(data);
</script>

<div class="pb-16 pt-6 sm:pb-24">
	<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
			<div class="lg:col-span-5 lg:col-start-8">
				<ProductSlice
					src={data?.product.imageURL || undefined}
					title={data?.product.name}
					price={data?.product.cost}
				/>
			</div>

			<!-- Image gallery -->
			<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
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
			</div>

			<div class="mt-8 lg:col-span-5">
				<form method="POST" use:enhance>
					{#each data?.product.components.filter((c) => c.editable) as component}
						<div>
							<EcardEditComponent
								label={component.label || undefined}
								value={component.default || ''}
								componentKey={component.ecardComponentID}
							/>
						</div>
					{/each}

					<fieldset class="pt-4">
						<Label id="abc" label="Basic Enhancements" showLabel class="pb-2" />

						<!-- <CheckCards options={enhancementItems} /> -->
					</fieldset>

					<button
						type="submit"
						class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Send Card
					</button>
				</form>

				<!-- Product details -->
				<div class="mt-10">
					<h2 class="text-sm font-medium text-gray-900">Description</h2>

					<div class="prose prose-sm mt-4 text-gray-500">
						<p>
							{data?.product.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
