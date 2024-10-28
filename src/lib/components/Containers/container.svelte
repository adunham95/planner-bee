<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
	let { ...props } = $props();
</script>

<div class={`container mx-auto px-4 sm:px-6 lg:px-8 ${props.class}`}>
	{@render props.children?.()}
</div>
