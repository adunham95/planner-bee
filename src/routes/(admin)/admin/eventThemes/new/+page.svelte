<script lang="ts">
	import { enhance } from '$app/forms';
	import ComponentList from '$lib/components/ComponentList.svelte';
	import EditTheme from '$lib/components/Forms/EditTheme.svelte';
	import TextArea from '$lib/components/Inputs/TextArea.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import PageHeaderShell from '$lib/components/Shells/PageHeaderShell.svelte';

	let { data } = $props();
	console.log(data);

	let components: { id: string; value: any; action?: string }[] = $state([]);
</script>

<PageHeaderShell title="New Event Theme">
	<form method="POST" use:enhance class="w-full">
		<EditTheme
			availableComponent={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
		/>
		<!-- <TextInput label="Name" id="name" showLabel />
		<TextInput label="SKU" id="sku" showLabel />
		<TextInput type="number" min="0" label="Price" id="price" showLabel />
		<TextInput min="0" label="Image URL" id="imageURL" showLabel />
		<TextArea label="Description" id="description" showLabel class="col-span-2" />
		<h3 class="text-2xl">Components</h3>
		<ComponentList
			groupName="component"
			class="col-span-2"
			components={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
			bind:value={components}
		/>
		<div>
			<button type="submit">Save</button>
		</div> -->
	</form>
</PageHeaderShell>
