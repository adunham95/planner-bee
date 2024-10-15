<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallContainer from '$lib/components/Containers/SmallContainer.svelte';
	import Checklist from '$lib/components/Inputs/Checklist.svelte';
	import TextArea from '$lib/components/Inputs/TextArea.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';

	export let data;
	console.log(data);
</script>

<SmallContainer>
	<h1>New eCard Template</h1>
	<form method="POST" use:enhance class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		<input type="hidden" name="id" value={data.product.id} />
		<TextInput value={data.product.name} label="Name" id="name" showLabel />
		<TextInput value={data.product.sku} label="SKU" id="sku" showLabel />
		<TextInput value={data.product.cost} type="number" min="0" label="Price" id="price" showLabel />
		<TextArea
			value={data.product.description}
			label="Description"
			id="description"
			showLabel
			class="col-span-2"
		/>
		<Checklist
			class="col-span-2"
			name="components"
			options={data.eCardComponents.map((c) => ({
				id: c.id,
				title: c.name,
				subtitle: c.description,
				checked: data.product.components.some((component) => component.ecardComponentID === c.id)
			}))}
		/>
		<div>
			<button type="submit">Save</button>
		</div>
	</form>
</SmallContainer>
