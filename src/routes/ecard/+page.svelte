<script lang="ts">
	import ItemGrid from '$lib/components/ItemGrid.svelte';
	import OrderPageTitle from '$lib/components/OrderPageTitle.svelte';

	export let data;
	console.log(data);
</script>

<OrderPageTitle title="eCards" description="Thoughtfully designed eCards for any occasion" />

<div class="relative">
	<div class="mx-auto max-w-7xl px-8">
		<ItemGrid
			items={data.eCards.map((e) => {
				return { ...e, path: `/ecard/${e.sku}/details` };
			})}
		/>
	</div>
</div>
