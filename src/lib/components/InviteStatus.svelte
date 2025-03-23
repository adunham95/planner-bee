<script lang="ts">
	interface Props {
		status: 'confirmed' | 'waiting' | 'rejected';
	}

	let { status = 'waiting' }: Props = $props();

	const statusData = {
		confirmed: {
			statusColor: 'bg-emerald-500',
			name: 'Confirmed'
		},
		waiting: {
			statusColor: 'bg-amber-500',
			name: 'Waiting'
		},
		rejected: {
			statusColor: 'bg-red-500',
			name: 'Rejected'
		}
	};

	let styles = $derived.by(() => {
		return statusData[status];
	});
</script>

<div class="ml-2 flex items-center gap-x-1.5">
	<div class={`flex-none rounded-full p-1 bg-opacity-20 ${styles.statusColor}`}>
		<div class={`size-1.5 rounded-full ${styles.statusColor}`}></div>
	</div>
	<span class="text-xs/5 text-gray-500">{styles.name}</span>
</div>
