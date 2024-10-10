<script lang="ts">
	import Label from './Label.svelte';
	export let label: string | undefined = undefined;
	export let id: string;
	export let groupName: string;
	export let options: { id: string; title: string; value?: string; checked?: boolean }[] = [];
	// console.log(options);
</script>

<fieldset class={$$props.class}>
	{#if label}
		<Label {label} {id} />
	{/if}

	<div class="mt-2 grid gap-y-6 gap-x-4 grid-template-auto">
		{#each options as radioElement}
			<label
				class="relative flex cursor-pointer rounded-lg border bg-theme-surface p-4 shadow-sm focus:outline-none has-[:checked]:border-theme-brand has-[:checked]:ring-1 has-[:checked]:ring-theme-brand has-[:checked]:bg-theme-brand-bg"
			>
				<input
					type="radio"
					id={radioElement.id}
					name={groupName}
					value={radioElement?.value || radioElement.id}
					checked={radioElement.checked}
					class="peer sr-only"
					aria-labelledby="project-type-0-label"
					aria-describedby="project-type-0-description-0 project-type-0-description-1"
				/>
				<span class="flex flex-1 text-theme-brand-content">
					<span id="project-type-0-label" class="block text-sm font-medium">
						{radioElement.title}
					</span>
				</span>

				<svg
					class="h-5 w-5 text-transparent peer-[:checked]:text-theme-brand-icon"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
						clip-rule="evenodd"
					/>
				</svg>

				<span
					class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-[:checked]:border-theme-brand"
					aria-hidden="true"
				></span>
			</label>
		{/each}
	</div>
</fieldset>
