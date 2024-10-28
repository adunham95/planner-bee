<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency';

	interface Props {
		defaultImage?: string;
		items?: {
		imageURL?: string | null;
		path: string;
		description: string;
		name: string;
		cost: number;
	}[];
	}

	let { defaultImage = '/images/card-flower.jpg', items = [] }: Props = $props();
</script>

<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 pb-16">
	{#each items as item}
		<div
			class="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
		>
			<div class="aspect-h-3 aspect-w-3 bg-gray-200 group-hover:opacity-75">
				<img
					src={item.imageURL || defaultImage}
					alt="Front of plain white t-shirt."
					class="h-full w-full object-cover object-center"
				/>
			</div>
			<div class="flex flex-1 flex-col space-y-2 p-4">
				<h3 class="text-sm font-medium text-gray-900">
					<a href={item.path}>
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
