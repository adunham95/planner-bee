<script lang="ts">
	import { generateColorString, hexToTailwindPallette } from '$lib/utils/gererateColorValues';
	import EmptyWrapper from './Containers/EmptyWrapper.svelte';
	import MealTrainSignUp from './EcardComponents/MealTrainSignUp.svelte';
	import PotluckSignUp from './EcardComponents/PotluckSignUp.svelte';
	import PromoSlot from './EcardComponents/PromoSlot.svelte';
	import Rsvp from './EcardComponents/RSVP.svelte';
	import Signature from './EcardComponents/Signature.svelte';
	import EcardDisplayComponent from './EcardDisplayComponent.svelte';

	interface Props {
		style?: string;
		components?: {
			id: string;
			ecardComponentID: string;
			style?: string;
			value: string;
		}[];
		signatures?: { name: string; message: string }[];
		mealTrainEnabled?: boolean;
		rsvpEnabled?: boolean;
		potluckOptions?: { id: string; title: string }[];
	}

	let {
		style = '',
		components = [],
		signatures = [],
		mealTrainEnabled = false,
		rsvpEnabled = false,
		potluckOptions = []
	}: Props = $props();

	console.log('eCard', { components });
</script>

<div
	{style}
	class="w-full ecard rounded border border-solid border-gray-200 bg-custom-100 @container/ecard"
>
	<!-- <EmptyWrapper {...tailwindPallette}> -->
	{#each components as component}
		<EcardDisplayComponent {...component} />
	{/each}

	{#if rsvpEnabled}
		<Rsvp />
	{/if}

	{#if potluckOptions.length > 0}
		<PotluckSignUp options={potluckOptions} />
	{/if}

	{#if mealTrainEnabled}
		<MealTrainSignUp />
	{/if}

	{#if signatures.length > 0}
		<Signature {signatures} />
	{/if}

	<PromoSlot />
	<!-- </EmptyWrapper> -->
</div>
