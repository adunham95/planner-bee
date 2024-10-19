<script lang="ts">
	import EcardDisplayComponent from './EcardDisplayComponent.svelte';

	export let components: {
		id: string;
		ecardComponentID: string;
		style?: string;
		value: string;
	}[] = [];
</script>

<div class="w-full ecard rounded border border-solid border-gray-200">
	{#each components as component}
		<EcardDisplayComponent {...component} />
	{/each}
</div>
