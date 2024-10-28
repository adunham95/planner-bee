<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		featureList?: { title: string; description: string; comingSoon?: boolean }[];
	}

	let { title = '', description = '', featureList = [] }: Props = $props();
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{title}
				</p>
				<p class="mt-6 text-base leading-7 text-gray-600">
					{description}
				</p>
			</div>

			<dl
				class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
			>
				{#each featureList as feature}
					<div class="relative pl-9">
						<dt class="font-semibold text-gray-900 flex items-center">
							<svg
								class="absolute left-0 top-1 h-5 w-5 text-indigo-500"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
									clip-rule="evenodd"
								/>
							</svg>
							{feature.title}
							{#if feature.comingSoon}
								<span
									class="ml-1 inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
								>
									<svg class="h-1.5 w-1.5 fill-purple-500" viewBox="0 0 6 6" aria-hidden="true">
										<circle cx="3" cy="3" r="3" />
									</svg>
									Coming Soon
								</span>
							{/if}
						</dt>
						<dd class="mt-2">
							{feature.description}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>
