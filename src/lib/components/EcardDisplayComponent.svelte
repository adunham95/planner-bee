<script lang="ts">
	import { eCardComponents } from '$lib/ecardComponents';
	import Message from './EcardComponents/Message.svelte';
	import Title from './EcardComponents/Title.svelte';

	export let ecardComponentID: string;
	export let value: string;
	export let style: string = '';

	$: component = eCardComponents.find((c) => c.id === ecardComponentID);

	$: console.log('displayComponent', { component });
</script>

{#if !component}
	<p>Error loading {ecardComponentID}</p>
{:else if component.displayComponentKey === 'message'}
	<Message {value} {style} />
{:else if component.displayComponentKey === 'color'}
	<p>Color</p>
{:else if component.displayComponentKey === 'title'}
	<Title title={value} {style} />
{/if}
