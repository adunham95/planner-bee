<script lang="ts">
	import { eCardComponents } from '$lib/ecardComponents';
	import ColorInput from './Inputs/ColorInput.svelte';
	import TextArea from './Inputs/TextArea.svelte';
	import TextInput from './Inputs/TextInput.svelte';

	interface Props {
		idPrefix?: string;
		showLabel?: boolean;
		componentKey: string;
		label?: string;
		value?: string;
		options?: string;
	}

	let {
		idPrefix,
		componentKey,
		label = undefined,
		value = $bindable(),
		showLabel = true,
		options
	}: Props = $props();

	let component = $derived(
		(eCardComponents || []).find((c) => {
			return c.id === componentKey;
		})
	);

	let customOptions = $derived(options ? JSON.parse(options) : []);
</script>

{#if !component}
	<p>Error loading {componentKey}</p>
{:else if component.editComponentKey === 'text'}
	<TextInput
		label={label || component.name}
		id={`${idPrefix ? idPrefix + '-' : ''}textInput"`}
		{showLabel}
		bind:value
	/>
{:else if component.editComponentKey === 'colorInput'}
	<TextInput
		label={label || component.name}
		id={`${idPrefix ? idPrefix + '-' : ''}textInput`}
		type="color"
		{showLabel}
		bind:value
	/>
{:else if component.editComponentKey === 'textArea'}
	<TextArea
		label={label || component.name}
		id={`${idPrefix ? idPrefix + '-' : ''}textArea`}
		{showLabel}
		class="col-span-2"
		bind:value
	/>
{:else if component.editComponentKey === 'colorPicker'}
	<ColorInput
		groupName={component.id}
		label={label || component.name}
		id={`${idPrefix ? idPrefix + '-' : ''}colorPicker`}
		options={customOptions || component.options}
		{showLabel}
	/>
{/if}
