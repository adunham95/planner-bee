<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	const links = [
		{ name: 'eCard Products', href: '/admin/ecards' },
		{ name: 'New eCard', href: '/admin/ecards/new' },
		{ name: 'Images', href: '/profile' },
		{ name: 'Users', href: '/my-orders' }
	];
</script>

<div class="bg-white py-1">
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
</div>

{@render children?.()}
