<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	export let tabId = '';
	export let activeTab = '';
</script>

<div class={`${activeTab === tabId ? 'block' : 'hidden'} ${$$props.class}`}>
	<slot />
</div>
