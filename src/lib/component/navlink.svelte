<script>
	import { page } from '$app/stores';
	// import Icon from '$lib/Icon.svelte';
	export let icon;
	export let href;
	export let name;
</script>

<a
	{href}
	class:active={$page.url.pathname.includes(href)}
	class="group flex gap-x-3 rounded-md bg-gray-50 p-2 text-sm font-semibold leading-6 text-brand-600"
>
	<svg
		class="h-6 w-6 shrink-0 text-brand-600"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
		/>
	</svg>
	Dashboard
	<!-- <Icon {title} /> -->
	{name}
</a>

<style lang="postcss">
	a.active {
		@apply bg-gray-50 text-brand-600;
	}
</style>
