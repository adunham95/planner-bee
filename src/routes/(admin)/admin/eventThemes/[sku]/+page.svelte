<script lang="ts">
	import { enhance } from '$app/forms';
	import EditTheme from '$lib/components/Forms/EditTheme.svelte';
	import PageHeaderShell from '$lib/components/Shells/PageHeaderShell.svelte';

	export let data;
	console.log({ data });
</script>

<PageHeaderShell title={`Edit Theme: ${data?.theme?.name || 'New Theme'}`}>
	<form method="POST" use:enhance class="w-full">
		<EditTheme
			{...data.theme}
			components={data.theme?.options.map((c) => ({
				id: c.id,
				action: 'edit',
				value: c
			}))}
			availableComponent={data.eCardComponents.map((c) => ({
				id: c.id,
				label: c.name
			}))}
		/>
	</form>
</PageHeaderShell>
