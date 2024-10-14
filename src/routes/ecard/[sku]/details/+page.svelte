<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency.js';

	export let data;

	console.log(data);
</script>

<div class="pb-16 pt-6 sm:pb-24">
	<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
			<div class="lg:col-span-5 lg:col-start-8">
				<div class="flex justify-between">
					<h1 class="text-xl font-medium text-gray-900">{data?.product.name}</h1>
					<p class="text-xl font-medium text-gray-900">{formatCurrency(data?.product.cost)}</p>
				</div>
			</div>

			<!-- Image gallery -->
			<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
				<h2 class="sr-only">Images</h2>

				<div class=" lg:gap-8">
					<img
						src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-featured-product-shot.jpg"
						alt="Back of women&#039;s Basic Tee in black."
						class="rounded-lg lg:col-span-2 lg:row-span-2"
					/>
				</div>
			</div>

			<div class="mt-8 lg:col-span-5">
				<form>
					<!-- Color picker -->
					<div>
						<h2 class="text-sm font-medium text-gray-900">Color</h2>

						<!-- <fieldset aria-label="Choose a color" class="mt-2">
							<div class="flex items-center space-x-3">
								{#each data?.product.colors as color}
									<label
										aria-label="Black"
										class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none"
									>
										<input type="radio" name="color-choice" value="Black" class="sr-only" />
										<span
											style="background-color: {color}"
											aria-hidden="true"
											class="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"
										></span>
									</label>
								{/each}
							</div>
						</fieldset> -->
					</div>

					<!-- Size picker -->
					<div class="mt-8">
						<div class="flex items-center justify-between">
							<h2 class="text-sm font-medium text-gray-900">Size</h2>
						</div>

						<!-- <fieldset aria-label="Choose a size" class="mt-2">
							<div class="flex gap-3">
								{#each data?.product.messages as type}
									<label
										class="flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1 min-[100px]:"
									>
										<input type="radio" name="size-choice" value={type.name} class="sr-only" />
										<p>{type.name}</p>
									</label>
								{/each}
							</div>
						</fieldset> -->
					</div>

					<div class="mt-8">
						<div class="flex items-center justify-between">
							<h2 class="text-sm font-medium text-gray-900">Headline</h2>
						</div>
						<input
							name="text"
							id="text"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>

					<div class="mt-8">
						<div class="flex items-center justify-between">
							<h2 class="text-sm font-medium text-gray-900">Message</h2>
						</div>
						<textarea
							name="message"
							id="message"
							rows="4"
							class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>

					<a
						href="/order"
						class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Send Card
					</a>

					<!-- <button
						type="submit"
						class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Send Card
					</button> -->
				</form>

				<!-- Product details -->
				<div class="mt-10">
					<h2 class="text-sm font-medium text-gray-900">Description</h2>

					<div class="prose prose-sm mt-4 text-gray-500">
						<p>
							{data?.product.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
