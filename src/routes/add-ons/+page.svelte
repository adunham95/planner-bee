<script>
	import { addOnItems } from '$lib/addOnItems';
	import ItemGrid from '$lib/components/ItemGrid.svelte';
	import OrderPageTitle from '$lib/components/OrderPageTitle.svelte';
</script>

<OrderPageTitle
	title="eCards Add Ons"
	description="Our exclusive add-ons are designed to give you more customization"
/>

<div class="relative">
	<div class="mx-auto max-w-7xl px-8">
		<ItemGrid items={addOnItems} />
	</div>
</div>
