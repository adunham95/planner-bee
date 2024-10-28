<script lang="ts">
	import Label from './Label.svelte';


	interface Props {
		label: string;
		id: string;
		groupName: string;
		showLabel?: boolean;
		options?: { id: string; title: string; checked?: boolean }[];
	}

	let {
		label,
		id,
		groupName,
		showLabel = false,
		options = []
	}: Props = $props();
</script>

<Label {id} {label} {showLabel} />
<div class="flex justify-start">
	{#each options as option}
		<label
			aria-label={option.title}
			style={`color: ${option.id}`}
			class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none mr-1 mb-1"
		>
			<input
				type="radio"
				name={groupName}
				value={option.id}
				checked={option.checked}
				class="sr-only peer"
			/>
			<span
				aria-hidden="true"
				class="h-8 w-8 rounded-full border border-gray-300 bg-current peer-[:checked]:border-black"
			></span>
		</label>
	{/each}
</div>
