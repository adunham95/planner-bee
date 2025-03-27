<script lang="ts">
	import AccountHeader from '$lib/components/Headers/AccountHeader.svelte';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const links = [
		{ title: 'eCard Products', path: '/admin/ecards' },
		{ title: 'New eCard', path: '/admin/ecards/new' },
		{ title: 'Event Themes', path: '/admin/eventThemes' },
		{ title: 'New Event Themes', path: '/admin/eventThemes/new' },
		{ title: 'Images', path: '/profile' },
		{ title: 'Users', path: '/my-orders' }
	];
</script>

<AccountHeader routes={links} appTitle="Planner Bee Admin" />

{@render children?.()}
