<script lang="ts">
	import ComponentList from '../ComponentList.svelte';
	import Select from '../Inputs/Select.svelte';
	import TextArea from '../Inputs/TextArea.svelte';
	import TextInput from '../Inputs/TextInput.svelte';

	interface IProps {
		name?: string;
		sku?: string;
		price?: number;
		imageURL?: string;
		description?: string;
		availableComponent: { id: string; label: string }[];
		components?: { id: string; value: any; action?: string }[];
		eCardSku?: string | null;
		availableCards?: { id: string; label: string }[];
	}

	let {
		name = '',
		availableComponent = [],
		sku = '',
		price = 0,
		imageURL = '',
		description = '',
		eCardSku = '',
		components = [],
		availableCards = []
	}: IProps = $props();

	$inspect(components);
</script>

<div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
	<TextInput label="Name" id="name" showLabel bind:value={name} />
	<TextInput label="SKU" id="sku" showLabel bind:value={sku} />
	<TextInput type="number" min="0" label="Price" id="price" showLabel bind:value={price} />
	<TextInput min="0" label="Image URL" id="imageURL" showLabel bind:value={imageURL} />
	<Select
		options={availableCards}
		label="eCard Invitation Template"
		id="eCardSku"
		showLabel
		bind:value={eCardSku}
	/>
	<TextArea
		label="Description"
		id="description"
		showLabel
		class="col-span-2"
		bind:value={description}
	/>
	<h3 class="text-2xl">Components</h3>
	<ComponentList
		groupName="component"
		class="col-span-2"
		components={availableComponent}
		bind:value={components}
	/>
	<div>
		<button type="submit">Save</button>
	</div>
</div>
