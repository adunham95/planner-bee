<script lang="ts">
	import { enhance } from '$app/forms';
	import ComponentList from '$lib/components/ComponentList.svelte';
	import ECard from '$lib/components/ECard.svelte';
	import TextArea from '$lib/components/Inputs/TextArea.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';

	export let data;
	console.log(data);
</script>

<!-- <SmallContainer>
	<h1>New eCard Template</h1>
	<form method="POST" use:enhance class="grid grid-cols-1 sm:grid-cols-2 gap-4">
		<input type="hidden" name="id" value={data.product.id} />
		<TextInput value={data.product.name} label="Name" id="name" showLabel />
		<TextInput value={data.product.sku} label="SKU" id="sku" showLabel />
		<TextInput value={data.product.cost} type="number" min="0" label="Price" id="price" showLabel />
		<TextInput
			value={data.product.imageURL}
			type="number"
			min="0"
			label="Price"
			id="price"
			showLabel
		/>
		<TextArea
			value={data.product.description}
			label="Description"
			id="description"
			showLabel
			class="col-span-2"
		/>
		<ComponentList
			groupName="component"
			class="col-span-2"
			components={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
			value={data.product.components.map((c) => {
				return { id: c.id, value: { ...c, component: c.ecardComponentID } };
			})}
		/>
		<div>
			<button type="submit">Save</button>
		</div>
	</form>
</SmallContainer> -->

<div class="flex">
	<div class=" w-full max-w-[700px] p-2 m-2">
		<h2 class="text-base font-semibold leading-6 text-gray-900">eCard Preview</h2>
		<div class="card p-0">
			<ECard
				style="min-height: 300px"
				components={data.product.components.map((c) => {
					return {
						id: c?.id || '',
						ecardComponentID: c?.ecardComponentID || '',
						style: c?.customStyles || ' ',
						value: c?.default || ''
					};
				})}
			/>
		</div>
	</div>
	<form method="POST" use:enhance class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
		<input type="hidden" name="id" value={data.product.id} />
		<TextInput value={data.product.name} label="Name" id="name" showLabel />
		<TextInput value={data.product.sku} label="SKU" id="sku" showLabel />
		<TextInput value={data.product.cost} type="number" min="0" label="Price" id="price" showLabel />
		<TextInput
			value={data.product.imageURL}
			type="number"
			min="0"
			label="imageURL"
			id="imageURL"
			showLabel
		/>
		<TextArea
			value={data.product.description}
			label="Description"
			id="description"
			showLabel
			class="col-span-2"
		/>
		<h3 class="text-2xl">Components</h3>
		<ComponentList
			groupName="component"
			class="col-span-2"
			components={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
			value={data.product.components.map((c) => {
				return { id: c.id, value: { ...c, component: c.ecardComponentID } };
			})}
		/>
		<!-- <ComponentList
			groupName="component"
			class="col-span-2"
			components={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
			bind:value={components}
		/> -->
		<div>
			<button type="submit">Save</button>
		</div>
	</form>
</div>
