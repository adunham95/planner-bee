<script lang="ts">
	import { eCardComponents } from '$lib/ecardComponents';
	import ColorInput from './Inputs/ColorInput.svelte';
	import TextArea from './Inputs/TextArea.svelte';
	import TextInput from './Inputs/TextInput.svelte';

	export let componentKey: string;

	$: component = eCardComponents.find((c) => c.id === componentKey);

	$: console.log({ component });
</script>

{#if !component}
	<p>Error loading {componentKey}</p>
{:else if component.editComponentKey === 'text'}
	<TextInput label={component.name} id="textInput" showLabel />
{:else if component.editComponentKey === 'textArea'}
	<TextArea label={component.name} id="textArea" showLabel class="col-span-2" />
{:else if component.editComponentKey === 'colorPicker'}
	<ColorInput
		groupName={component.id}
		label={component.name}
		id="colorPicker"
		options={component.options}
		showLabel
	/>
{/if}
