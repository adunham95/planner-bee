<script lang="ts">
	import EcardEditComponent from '$lib/components/EcardEditComponent.svelte';
	import { formatCurrency } from '$lib/utils/formatCurrency.js';

	export let data;

	console.log(data);
</script>

<div class="pb-16 pt-6 sm:pb-24">
	<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
			<div class="lg:col-span-5 lg:col-start-8">
				<div class="flex justify-between">
					<h1 class="text-xl font-medium text-gray-900">{data?.product.name}</h1>
					<p class="text-xl font-medium text-gray-900">{formatCurrency(data?.product.cost)}</p>
				</div>
			</div>

			<!-- Image gallery -->
			<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
				<h2 class="sr-only">Images</h2>

				<div class=" lg:gap-8">
					<img
						src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg"
						alt="Back of women&#039;s Basic Tee in black."
						class="rounded-lg lg:col-span-2 lg:row-span-2"
					/>
				</div>
			</div>

			<div class="mt-8 lg:col-span-5">
				<form>
					{#each data?.product.components.filter((c) => c.editable) as component}
						<div>
							<EcardEditComponent
								label={component.label}
								value={component.default}
								componentKey={component.ecardComponentID}
							/>
						</div>
					{/each}

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
