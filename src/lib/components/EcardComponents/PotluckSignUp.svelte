<script lang="ts">
	interface Props {
		options?: { id: string; title: string }[];
	}

	const { options = [] }: Props = $props();
</script>

<fieldset class="mx-auto max-w-xl py-2">
	<h3>Potluck Sign Up</h3>
	<ul class="gap-4 grid grid-cols-2">
		{#each options as option}
			<li>
				<label
					class="relative block cursor-pointer rounded-lg border bg-white text-gray-900 px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between has-[:checked]:border-custom-600 has-[:checked]:ring-2 has-[:checked]:ring-custom-600 has-[:checked]:bg-custom-200 has-[:checked]:text-custom-900"
				>
					<input type="checkbox" name="potluck-item" value={option.id} class="sr-only" />
					<span class="flex items-center">
						<span class="font-medium">{option.title}</span>
					</span>

					<span
						class="pointer-events-none absolute -inset-px rounded-lg border-2"
						aria-hidden="true"
					></span>
				</label>
			</li>
		{/each}
	</ul>
</fieldset>
