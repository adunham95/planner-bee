<script lang="ts">
	import { enhance } from '$app/forms';
	import ComponentList from '$lib/components/ComponentList.svelte';
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
		<TextInput label="Name" id="name" showLabel />
		<TextInput label="SKU" id="sku" showLabel />
		<TextInput type="number" min="0" label="Price" id="price" showLabel />
		<TextArea label="Description" id="description" showLabel class="col-span-2" />
		<ComponentList
			groupName="component"
			class="col-span-2"
			components={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
		/>
		<div>
			<button type="submit">Save</button>
		</div>
	</form>
</SmallContainer>
