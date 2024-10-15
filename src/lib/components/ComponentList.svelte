<script lang="ts">
	import { generateID } from '../utils/generateID';
	import Select from './Inputs/Select.svelte';
	import TextArea from './Inputs/TextArea.svelte';
	import TextInput from './Inputs/TextInput.svelte';
	import Toggle from './Inputs/Toggle.svelte';

	export let placeholder = '';
	export let groupName: string;
	export let components: { id: string; label: string }[] = [];

	export let array: { id: string; value: any }[] = [{ id: generateID(4), value: {} }];

	const addItem = () => {
		array = [...array, { id: generateID(4), value: {} }];
	};

	const removeItem = (idToRemove: string) => {
		array = array.filter((item) => item.id !== idToRemove);
	};

	$: console.log(array);
</script>

<ul role="list" class={`mt-2 divide-y divide-gray-200 ${$$props.class || ''}`}>
	{#each array as item}
		<li class="flex items-end justify-between py-3">
			<div class="grid grid-cols-2 w-full gap-4">
				<TextInput
					label="Label"
					showLabel
					class="col-span-1"
					id={`${groupName}-${item.id}-label`}
					{placeholder}
					bind:value={item.value.label}
				/>
				<Select
					id={`${groupName}-${item.id}-ecardComponentID`}
					label="Component"
					showLabel
					class="col-span-1"
					bind:value={item.value.component}
					options={components}
				/>
				<TextArea
					bind:value={item.value.description}
					label="Default Value"
					id={`${groupName}-${item.id}-default`}
					showLabel
					class="col-span-2"
				/>
				<Toggle
					bind:checked={item.value.editable}
					class="flex items-end w-full pl-2 pb-2"
					id="${groupName}-{item.id}-editable"
					label="Editable"
				/>
			</div>
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
