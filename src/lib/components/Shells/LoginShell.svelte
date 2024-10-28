<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="flex min-h-full">
	<div class="flex flex-1 flex-col justify-center px-4 py-12">
		{@render children?.()}
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
		<img class="absolute inset-0 h-full w-full object-cover" src="/images/outdoor.jpg" alt="" />
	</div>
</div>
