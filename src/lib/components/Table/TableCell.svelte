<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 $$props.class">
	{@render children?.()}
</td>
