<script>
	import PageHeaderShell from '$lib/components/Shells/PageHeaderShell.svelte';
	import Table from '$lib/components/Table/Table.svelte';
	import TableCell from '$lib/components/Table/TableCell.svelte';
	import TableRow from '$lib/components/Table/TableRow.svelte';
	let { data } = $props();
	console.log(data);
</script>

<PageHeaderShell title="Orders">
	<Table headers={['Product', 'Order Number', 'Recipients', 'Status']}>
		{#each data.orders as order}
			<TableRow>
				<TableCell>{order.eCard.name}</TableCell>
				<TableCell>{order.orderNumber}</TableCell>
				<TableCell>{order.recipients.length}</TableCell>
				<TableCell>{order.status}</TableCell>
				<TableCell
					><a href={`/my-orders/${order.orderNumber}`} class="btn btn-text">View</a></TableCell
				>
			</TableRow>
		{/each}
	</Table>
</PageHeaderShell>
