<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency';

	interface Props {
		className?: string;
		checkedOptions?: string[];
		type?: 'checkbox' | 'radio';
		groupName?: string;
		hideCheck?: boolean;
		passValue?: boolean;
		options?: {
			id: string;
			name?: string;
			title: string;
			description?: string;
			price?: number;
			checked?: boolean;
			disabled?: boolean;
		}[];
	}

	let {
		className = '',
		options = [],
		type = 'checkbox',
		groupName,
		hideCheck = false,
		passValue = false,
		checkedOptions = $bindable([''])
	}: Props = $props();

	function toggleChecked(key: string) {
		if (type === 'radio') {
			checkedOptions = [key];
		} else if (checkedOptions?.includes(key)) {
			checkedOptions = checkedOptions.filter((o) => o !== key);
		} else {
			checkedOptions?.push(key);
		}
	}
</script>

<div class={`gap-y-6 gap-x-4 ${className}`}>
	{#each options as option}
		{@const value = type === 'radio' || passValue ? option.name || option.id : ''}
		<label
			class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none mb-2"
		>
			<input
				{type}
				name={groupName || option.name || option.id}
				{value}
				checked={checkedOptions?.includes(value) || option.checked}
				onchange={() => toggleChecked(value)}
				class="peer sr-only"
				disabled={option.disabled}
			/>
			<span class="flex flex-1 peer-[:disabled]:opacity-30 peer-[:disabled]:cursor-not-allowed">
				<span class="flex flex-col">
					<span class="block text-sm font-medium text-gray-900">{option.title}</span>
					{#if option.description}
						<span class="mt-1 flex items-center text-sm text-gray-500">
							{option.description}
						</span>
					{/if}
					{#if option.price}
						<span class="mt-4 text-sm font-medium text-gray-900">
							{formatCurrency(option.price)}
						</span>
					{/if}
				</span>
			</span>

			{#if !hideCheck}
				<svg
					class="h-5 w-5 text-transparent peer-[:checked]:text-green-500"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
						clip-rule="evenodd"
					/>
				</svg>
			{/if}
			<span
				class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-[:checked]:border-green-600"
				aria-hidden="true"
			></span>
		</label>
	{/each}
</div>
