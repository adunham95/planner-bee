<script lang="ts">
	import PromoSlot from './EcardComponents/PromoSlot.svelte';
	import Rsvp from './EcardComponents/RSVP.svelte';
	import EcardDisplayComponent from './EcardDisplayComponent.svelte';

	export let style = '';
	export let components: {
		id: string;
		ecardComponentID: string;
		style?: string;
		value: string;
	}[] = [];

	console.log('eCard', { components });
</script>

<div
	{style}
	class="w-full ecard rounded border border-solid border-gray-200 bg-custom-100 @container/ecard"
>
	{#each components as component}
		<EcardDisplayComponent {...component} />
	{/each}

	<!-- <Rsvp /> -->

	<PromoSlot />
</div>
