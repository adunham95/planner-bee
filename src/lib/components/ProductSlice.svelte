<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency';

	interface Props {
		src?: string | null;
		title?: string;
		descriptionList?: string[];
		price?: number;
	}

	let { src, title = '', descriptionList = [], price = 0 }: Props = $props();
</script>

<li class="flex space-x-6 py-6">
	<img
		src={src || '/images/card-flower.jpg'}
		alt="Product Show"
		class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
	/>
	<div class="flex-auto">
		<div class="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
			<div class="flex-auto space-y-1 text-sm font-medium">
				<h3 class="text-gray-900 text-base font-medium">{title}</h3>
				<p class="text-gray-900">{formatCurrency(price)}</p>
				{#each descriptionList as description}
					<p class="text-gray-400">{description}</p>
				{/each}
			</div>
		</div>
	</div>
</li>
