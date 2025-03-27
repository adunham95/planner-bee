<script lang="ts">
	import AccountHeader from '$lib/components/Headers/AccountHeader.svelte';
	import type { title } from 'process';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const links = [
		{ title: 'Shop', path: '/shop' },
		{ title: 'Dashboard', path: '/dashboard' },
		{ title: 'Profile', path: '/profile' },
		{ title: 'Orders', path: '/my-orders' },
		{ title: 'Contacts', path: '/contacts' }
	];
</script>

<!-- <div class="bg-white py-1">
	<nav class="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-x-4">
		{#each links as link}
			<a
				href={link.href}
				class="text-brand-600 rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-brand-100"
			>
				{link.name}
			</a>
		{/each}
	</nav>
</div> -->

<AccountHeader routes={links} />

{@render children?.()}
