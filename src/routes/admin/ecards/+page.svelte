<script lang="ts">
	import Container from '$lib/components/Containers/container.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import TableCell from '$lib/components/Table/TableCell.svelte';
	import TableRow from '$lib/components/Table/TableRow.svelte';

	let { data } = $props();
	console.log(data);
</script>

<Container>
	<a href="/admin/ecards/new">Add New Card</a>
	<Table title="eCards" headers={['SKU', 'Name', 'Components']}>
		{#each data.eCards as ecard}
			<TableRow>
				<TableCell>{ecard.sku}</TableCell>
				<TableCell>{ecard.name}</TableCell>
				<TableCell>{ecard.components.length}</TableCell>
				<TableCell><a href="/admin/ecards/{ecard.sku}">Edit</a></TableCell>
			</TableRow>
		{/each}
	</Table>
</Container>
