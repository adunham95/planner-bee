<script lang="ts">
	export let name: string | undefined = undefined;
	export let options: {
		id: string;
		title: string;
		checked?: boolean | undefined;
		subtitle?: string | undefined | null;
	}[] = [];
</script>

<div class={`space-y-5 ${$$props.class}`}>
	{#each options as option}
		<div class="relative flex items-start">
			<div class="flex h-6 items-center">
				<input
					id={option.id}
					name={name || option.id}
					value={option.id}
					type="checkbox"
					checked={option.checked}
					class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
				/>
			</div>
			<label for={option.id} class="ml-3 text-sm leading-6">
				<p class="font-medium text-gray-900">{option.title}</p>
				<p id="comments-description" class="text-gray-500">
					{option.subtitle || ''}
				</p>
			</label>
		</div>
	{/each}
</div>
