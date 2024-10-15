<script lang="ts">
	import { eCardComponents } from '$lib/ecardComponents';
	import ColorInput from './Inputs/ColorInput.svelte';
	import TextArea from './Inputs/TextArea.svelte';
	import TextInput from './Inputs/TextInput.svelte';

	export let componentKey: string;
	export let label: string | null | undefined = undefined;
	export let value: string | null | undefined = undefined;

	$: component = eCardComponents.find((c) => c.id === componentKey);

	$: console.log({ component });
</script>

{#if !component}
	<p>Error loading {componentKey}</p>
{:else if component.editComponentKey === 'text'}
	<TextInput label={label || component.name} id="textInput" showLabel {value} />
{:else if component.editComponentKey === 'textArea'}
	<TextArea label={label || component.name} id="textArea" showLabel class="col-span-2" {value} />
{:else if component.editComponentKey === 'colorPicker'}
	<ColorInput
		groupName={component.id}
		label={label || component.name}
		id="colorPicker"
		options={component.options}
		showLabel
	/>
{/if}
