<script lang="ts">
	interface Props {
		options: { imageURL?: string; title: string; url: string; cta?: string }[];
	}

	let { options = [] }: Props = $props();
</script>

<div class="mt-8 grid grid-cols-5 gap-y-12">
	{#each options as opt}
		<div>
			<div class="relative aspect-square">
				<div class="relative w-full overflow-hidden rounded-lg">
					<img
						src={opt.imageURL || '/images/balloons.jpg'}
						alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
						class="size-full object-cover"
					/>
				</div>
				<div class="relative mt-4">
					<h3 class="text-sm font-medium text-gray-900">{opt.title}</h3>
				</div>
			</div>
			<div class="mt-6">
				<a
					href={opt.url}
					class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
				>
					{opt.cta || 'Customize'}
					<span class="sr-only">, {opt.title}</span>
				</a>
			</div>
		</div>
	{/each}
</div>
