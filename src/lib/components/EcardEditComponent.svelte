<script lang="ts">
	import { eCardComponents } from '$lib/ecardComponents';
	import ColorInput from './Inputs/ColorInput.svelte';
	import TextArea from './Inputs/TextArea.svelte';
	import TextInput from './Inputs/TextInput.svelte';

	interface Props {
		componentKey: string;
		label?: string;
		value?: string;
	}

	let { componentKey, label = undefined, value = $bindable() }: Props = $props();

	let component = $derived(eCardComponents.find((c) => c.id === componentKey));

	$effect(() => {
		console.log({ component });
	});
</script>

{#if !component}
	<p>Error loading {componentKey}</p>
{:else if component.editComponentKey === 'text'}
	<TextInput label={label || component.name} id="textInput" showLabel bind:value />
{:else if component.editComponentKey === 'colorInput'}
	<TextInput label={label || component.name} id="textInput" type="color" showLabel bind:value />
{:else if component.editComponentKey === 'textArea'}
	<TextArea label={label || component.name} id="textArea" showLabel class="col-span-2" bind:value />
{:else if component.editComponentKey === 'colorPicker'}
	<ColorInput
		groupName={component.id}
		label={label || component.name}
		id="colorPicker"
		options={component.options}
		showLabel
	/>
{/if}
