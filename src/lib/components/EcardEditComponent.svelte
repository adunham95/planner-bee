<script lang="ts">
	import { eCardComponents } from '$lib/ecardComponents';
	import ColorInput from './Inputs/ColorInput.svelte';
	import TextArea from './Inputs/TextArea.svelte';
	import TextInput from './Inputs/TextInput.svelte';

	interface Props {
		showLabel?: boolean;
		componentKey: string;
		label?: string;
		value?: string;
		options?: string;
	}

	let {
		componentKey,
		label = undefined,
		value = $bindable(),
		showLabel = true,
		options = ''
	}: Props = $props();

	let component = $derived(eCardComponents.find((c) => c.id === componentKey));

	let customOptions = $derived(JSON.parse(options));

	$effect(() => {
		console.log({ component, customOptions });
	});
</script>

{#if !component}
	<p>Error loading {componentKey}</p>
{:else if component.editComponentKey === 'text'}
	<TextInput label={label || component.name} id="textInput" {showLabel} bind:value />
{:else if component.editComponentKey === 'colorInput'}
	<TextInput label={label || component.name} id="textInput" type="color" {showLabel} bind:value />
{:else if component.editComponentKey === 'textArea'}
	<TextArea
		label={label || component.name}
		id="textArea"
		{showLabel}
		class="col-span-2"
		bind:value
	/>
{:else if component.editComponentKey === 'colorPicker'}
	<ColorInput
		groupName={component.id}
		label={label || component.name}
		id="colorPicker"
		options={customOptions || component.options}
		{showLabel}
	/>
{/if}
