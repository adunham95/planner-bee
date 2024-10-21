<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency';

	export let src: string | undefined | null;
	export let title = '';
	export let price = 0;
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
				<h3 class="text-gray-900">{title}</h3>
				<p class="text-gray-900">{formatCurrency(price)}</p>
			</div>
		</div>
	</div>
</li>
