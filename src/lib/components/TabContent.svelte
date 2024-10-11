<script lang="ts">
	export let tabId = '';
	export let activeTab = '';
</script>

<div class={`${activeTab === tabId ? 'block' : 'hidden'} ${$$props.class}`}>
	<slot />
</div>
