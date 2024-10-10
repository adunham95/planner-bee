<script lang="ts">
	export let label: string | undefined = undefined;
	export let subLabel: string | undefined = undefined;
	export let id: string;
	export let required = false;
	export let checked = false;
</script>

<div class={$$props.class}>
	<div class="flex">
		{#if label}
			<label for={id} class="flex flex-grow flex-col">
				<span class="text-sm font-medium leading-6 text-gray-900" id="availability-label">
					{label}
				</span>
				{#if subLabel}
					<span class="text-sm text-gray-500" id="availability-description">
						{subLabel}
					</span>
				{/if}
			</label>
		{/if}
		<div class="flex items-center">
			<label
				for={id}
				class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 has-[:checked]:ring-theme-brand has-[:checked]:bg-theme-primary"
				aria-checked="false"
				aria-labelledby="annual-billing-label"
			>
				<input {id} {required} bind:checked name={id} type="checkbox" class="peer hidden" />
				<span
					aria-hidden="true"
					class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out peer-[:checked]:translate-x-5"
				></span>
			</label>
		</div>
	</div>
</div>
