<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency';

	interface Props {
		title?: string | undefined;
		products?: {
		imageURL?: string | null;
		path: string;
		description: string;
		name: string;
		cost: number;
	}[];
	}

	let { title = undefined, products = [] }: Props = $props();
</script>

<div class="mx-auto py-2">
	{#if title}
		<div class="flex items-center justify-between space-x-4">
			<h2 class="text-lg font-medium text-gray-900">{title}</h2>
		</div>
	{/if}
	<div class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
		{#each products as product}
			<div class="group relative">
				<div class="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
					{#if product.imageURL}
						<img
							src={product.imageURL}
							alt="Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background."
							class="object-cover object-center"
						/>
					{/if}
				</div>
				<div
					class="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900"
				>
					<h3>
						<a href={product.path}>
							<span aria-hidden="true" class="absolute inset-0"></span>
							{product.name}
						</a>
					</h3>
				</div>
				{#if product.cost}
					<p class="mt-1 text-sm text-gray-500">{formatCurrency(product.cost)}</p>
				{/if}
			</div>
		{/each}

		<!-- More products... -->
	</div>
</div>
