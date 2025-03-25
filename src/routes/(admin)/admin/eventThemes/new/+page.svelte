<script lang="ts">
	import { enhance } from '$app/forms';
	import EditTheme from '$lib/components/Forms/EditTheme.svelte';
	import PageHeaderShell from '$lib/components/Shells/PageHeaderShell.svelte';

	let { data } = $props();

	$inspect(data);
</script>

<PageHeaderShell title="New Event Theme">
	<form method="POST" use:enhance class="w-full">
		<EditTheme
			availableCards={data.eCards.map((c) => ({
				id: c.sku,
				label: c.name
			}))}
			availableComponent={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
		/>
	</form>
</PageHeaderShell>
