<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	export let label: string;
	export let id: string;
	export let type: 'legend' | 'label' = 'label';
	export let showLabel = false;
</script>

{#if type === 'label'}
	<label
		for={id}
		class={`block text-sm font-medium leading-6 text-gray-700 ${showLabel ? '' : 'sr-only'} ${$$props.class}`}
		>{label}</label
	>
{:else if type === 'legend'}
	<legend
		class={`block text-sm font-medium leading-6 text-gray-700 ${showLabel ? '' : 'sr-only'} ${$$props.class}`}
		>{label}</legend
	>
{/if}
