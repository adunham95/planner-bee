<script lang="ts">
	import { run } from 'svelte/legacy';

	import { eCardComponents } from '$lib/ecardComponents';
	import Banner from './EcardComponents/Banner.svelte';
	import ColorStyle from './EcardComponents/ColorStyle.svelte';
	import Message from './EcardComponents/Message.svelte';
	import Title from './EcardComponents/Title.svelte';

	interface Props {
		ecardComponentID: string;
		value: string;
		style?: string;
	}

	let { ecardComponentID, value, style = '' }: Props = $props();

	let component = $derived(eCardComponents.find((c) => c.id === ecardComponentID));

	run(() => {
		console.log('displayComponent', { component });
	});
</script>

{#if !component}
	<p>Error loading {ecardComponentID}</p>
{:else if component.displayComponentKey === 'message'}
	<Message {value} {style} />
{:else if component.displayComponentKey === 'color'}
	<ColorStyle color={value} />
{:else if component.displayComponentKey === 'title'}
	<Title title={value} {style} />
{:else if component.displayComponentKey === 'banner'}
	<Banner img={value} {style} />
{/if}
