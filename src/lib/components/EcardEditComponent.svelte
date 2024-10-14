<script lang="ts">
	import { eCardComponents } from '$lib/ecardComponents';
	import TextArea from './Inputs/TextArea.svelte';

	export let componentKey: string;

	$: component = eCardComponents.find((c) => c.id === componentKey);

	$: console.log({ component });
</script>

<div>
	{componentKey}
</div>

{#if !component}
	<p>Error loading {componentKey}</p>
{/if}

{#if component && component.editComponentKey === 'textArea'}
	<TextArea label={component.name} id="textArea" showLabel class="col-span-2" />
{/if}
