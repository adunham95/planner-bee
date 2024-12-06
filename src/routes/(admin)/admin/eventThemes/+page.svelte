<script lang="ts">
	import PageHeaderShell from '$lib/components/Shells/PageHeaderShell.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import TableCell from '$lib/components/Table/TableCell.svelte';
	import TableRow from '$lib/components/Table/TableRow.svelte';

	export let data;
	console.log({ data });
</script>

<PageHeaderShell title="Event Products">
	<Table headers={['SKU', 'Name', 'Components']}>
		{#each data.events as event}
			<TableRow>
				<TableCell>{event.sku}</TableCell>
				<TableCell>{event.name}</TableCell>
				<TableCell>{event.options.length}</TableCell>
				<TableCell><a href="/admin/eventThemes/{event.sku}">Edit</a></TableCell>
			</TableRow>
		{/each}
	</Table>
</PageHeaderShell>
