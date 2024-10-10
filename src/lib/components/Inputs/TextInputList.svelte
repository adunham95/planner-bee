<script lang="ts">
	import { generateID } from '$helpers/generateId';
	import TextInput from './TextInput.svelte';

	export let inputType = 'text';
	export let placeholder = '';
	export let groupName: string;

	let array = [{ id: generateID(4), value: '' }];

	const addItem = () => {
		array = [...array, { id: generateID(4), value: '' }];
	};

	const removeItem = (idToRemove: string) => {
		array = array.filter((item) => item.id !== idToRemove);
	};
</script>

<ul role="list" class="mt-2 divide-y divide-gray-200">
	{#each array as item}
		<li class="flex items-center justify-between py-3">
			<TextInput
				class="w-full"
				id={`datetime-test-${item.id}`}
				{placeholder}
				name={groupName}
				type={inputType}
				bind:value={item.value}
			/>
			<button
				on:click={() => removeItem(item.id)}
				type="button"
				class="ml-6 rounded-md bg-white text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				Remove
			</button>
		</li>
	{/each}
	<li class="flex items-center justify-between py-2">
		<button
			on:click={addItem}
			type="button"
			class="group -ml-1 flex w-full items-center rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
		>
			<span
				class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400"
			>
				<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path
						d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
					/>
				</svg>
			</span>
			<span class="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">Add</span>
		</button>
	</li>
</ul>
