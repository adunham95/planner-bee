<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props & { [key: string]: any }} */
	let { ...props } = $props();
</script>

<tr class={props.class}>
	{@render props.children?.()}
</tr>
