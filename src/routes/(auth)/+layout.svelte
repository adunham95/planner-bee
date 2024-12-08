<script lang="ts">
	import LoginShell from '$lib/components/Shells/LoginShell.svelte';

	let { children } = $props();
</script>

<LoginShell>
	{@render children?.()}
</LoginShell>
