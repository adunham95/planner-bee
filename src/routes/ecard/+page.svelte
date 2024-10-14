<script lang="ts">
	import products from '$lib/testCards.json';
	import { formatCurrency } from '$lib/utils/formatCurrency.js';

	export let data;
	console.log(data);
</script>

<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
	<div class="py-24">
		<h1 class="text-4xl font-bold tracking-tight text-gray-900">eCards</h1>
		<p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
			Thoughtfully designed objects for the workspace, home, and travel.
		</p>
	</div>
</div>

<div class="relative">
	<div class="mx-auto max-w-7xl px-8">
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 pb-16">
			{#each data.eCards as item}
				<div
					class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
				>
					<div
						class="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96"
					>
						<img
							src="https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-03.jpg"
							alt="Front of plain white t-shirt."
							class="h-full w-full object-cover object-center sm:h-full sm:w-full"
						/>
					</div>
					<div class="flex flex-1 flex-col space-y-2 p-4">
						<h3 class="text-sm font-medium text-gray-900">
							<a href={`/ecard/${item.sku}/details`}>
								<span aria-hidden="true" class="absolute inset-0"></span>
								{item.name}
							</a>
						</h3>
						<p class="text-sm text-gray-500">{item.description}</p>
						<div class="flex flex-1 flex-col justify-end">
							<p class="text-base font-medium text-gray-900">{formatCurrency(item.cost)}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
