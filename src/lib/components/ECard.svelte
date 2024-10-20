<script lang="ts">
	import EcardDisplayComponent from './EcardDisplayComponent.svelte';

	export let components: {
		id: string;
		ecardComponentID: string;
		style?: string;
		value: string;
	}[] = [];

	console.log('eCard', { components });
</script>

<div class="w-full ecard rounded border border-solid border-gray-200 bg-custom-100">
	{#each components as component}
		<EcardDisplayComponent {...component} />
	{/each}
</div>
