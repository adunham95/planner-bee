<script lang="ts">
	import { enhance } from '$app/forms';
	import ComponentList from '$lib/components/ComponentList.svelte';
	import ECard from '$lib/components/ECard.svelte';
	import TextArea from '$lib/components/Inputs/TextArea.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import PageHeaderShell from '$lib/components/Shells/PageHeaderShell.svelte';

	let { data } = $props();
	console.log(data);

	let components: { id: string; value: any; action?: string }[] = $state([]);
</script>

<PageHeaderShell title="New eCard">
	<div class="flex">
		<div class=" w-full max-w-[700px] p-2 m-2">
			<h2 class="text-base font-semibold leading-6 text-gray-900">eCard Preview</h2>
			<div class="card p-0">
				<ECard
					style="min-height: 300px"
					components={components.map((c) => {
						return {
							id: c?.id || '',
							ecardComponentID: c?.value?.component,
							style: c?.value?.style,
							value: c?.value?.default
						};
					})}
				/>
			</div>
		</div>
		<form method="POST" use:enhance class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
			<TextInput label="Name" id="name" showLabel />
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
			</div>
		</form>
	</div>
</PageHeaderShell>
