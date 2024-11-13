<script lang="ts">
	interface Box {
		width: number;
		header: string;
		title: string;
		imgUrl: string;
		description: string;
	}

	interface Props {
		boxes: Box[];
	}

	let { boxes = [] }: Props = $props();
</script>

<div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
	{#each boxes as box}
		<div class="relative" style={`grid-column: span ${box.width} / span ${box.width};`}>
			<div class="absolute inset-px rounded-lg bg-white"></div>
			<div
				class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
			>
				<img class="h-80 object-cover object-center" src={box.imgUrl} alt="" />
				<div class="p-10 pt-4">
					<h3 class="text-sm/4 font-semibold text-indigo-600">{box.title}</h3>
					<p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
						{box.header}
					</p>
					<p class="mt-2 max-w-lg text-sm/6 text-gray-600">
						{box.description}
					</p>
				</div>
			</div>
			<div
				class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"
			></div>
		</div>
	{/each}
</div>
