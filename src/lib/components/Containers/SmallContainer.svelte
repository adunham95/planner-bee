<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
	let { ...props } = $props();
</script>

<div class={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${props.class}`}>
	<div class="mx-auto max-w-3xl">
		{@render props.children?.()}
	</div>
</div>
