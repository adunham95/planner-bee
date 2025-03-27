<script lang="ts">
	interface Props {
		title?: string;
		subTitle?: string;
		images?: string[];
	}

	let { title = '', subTitle = '', images = [] }: Props = $props();
</script>

<div class="relative isolate">
	<div class="overflow-hidden">
		<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
			<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
				<div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
					<h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
						{title}
					</h1>
					<p
						class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none"
					>
						{subTitle}
					</p>
					<div class="mt-10 flex items-center gap-x-6">
						<a href="/shop" class="btn">Get started</a>
						<a href="/ecard-demo" class="text-sm font-semibold leading-6 text-gray-900"
							>Live demo <span aria-hidden="true">→</span></a
						>
					</div>
				</div>
				<div
					class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
				>
					<div
						class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
					>
						<div class="relative">
							<img
								src={images[0] || ''}
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
					</div>
					<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
						<div class="relative">
							<img
								src={images[1] || ''}
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
						<div class="relative">
							<img
								src={images[2] || ''}
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
					</div>
					<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
						<div class="relative">
							<img
								src={images[3] || ''}
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
						<div class="relative">
							<img
								src={images[4] || ''}
								alt=""
								class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
							/>
							<div
								class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
