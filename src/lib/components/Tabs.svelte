<script lang="ts">
	interface Props {
		tabs?: { id: string; title: string }[];
		activeTab?: string;
	}

	let { tabs = [], activeTab = $bindable('') }: Props = $props();
</script>

<div class="mt-3 sm:mt-4">
	<div class="block">
		<nav class=" flex space-x-8">
			{#each tabs as tab}
				<button
					onclick={() => {
						activeTab = tab.id;
					}}
					class={`${activeTab === tab.id ? 'text-indigo-700 bg-indigo-100' : ' '} rounded-md border border-transparent bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900`}
					aria-current="page"
				>
					{tab.title}
				</button>
			{/each}
		</nav>
	</div>
</div>
