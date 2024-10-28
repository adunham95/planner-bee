<script>
	import Heading from '$components/Text/Heading.svelte';
	import TextInputList from './TextInputList.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [hideHeading]
	 */

	/** @type {Props} */
	let { hideHeading = true } = $props();
</script>

<div>
	{#if !hideHeading}
		<Heading tag="h3" variant="h3">Add Time Preferences</Heading>
	{/if}
	<!-- TODO Add min time of toady -->
	<TextInputList inputType="datetime-local" groupName="time-preference" />
</div>
