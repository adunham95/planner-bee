<script lang="ts">
	import Label from './Label.svelte';
	export let label: string;
	export let id: string;
	export let groupName: string;
	export let options: {
		id: string;
		title: string;
		subtitle?: string;
		value?: string;
		checked?: boolean;
	}[] = [];
</script>

<fieldset class={$$props.class}>
	<Label {label} {id} />

	<div class="-space-y-px rounded-md bg-white">
		{#each options as option, index}
			<label
				aria-label="Public access"
				class={`${index === 0 && 'rounded-tl-md rounded-tr-md'} ${index === options.length - 1 && 'rounded-bl-md rounded-br-md'} relative flex cursor-pointer border p-4 focus:outline-none has-[:checked]:bg-theme-secondary-content/10`}
			>
				<input
					type="radio"
					name={groupName}
					value={option.value || option.id}
					checked={option.checked}
					class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer text-theme-primary border-gray-300 focus:ring-theme-primary active:ring-2 active:ring-offset-2 active:ring-theme-primary peer"
				/>
				<span
					class="ml-3 flex flex-col peer-[:checked]:text-theme-content text-theme-secondary-content"
				>
					<span class="block text-sm font-medium">{option.title}</span>
					<span class="block text-sm">
						{option.subtitle}
					</span>
				</span>
			</label>
		{/each}
	</div>
</fieldset>
