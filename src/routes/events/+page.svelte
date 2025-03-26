<script lang="ts">
	import Container from '$lib/components/Containers/container.svelte';

	let { data } = $props();
	$inspect(data);
</script>

<Container>
	<h2 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight py-2">My Events</h2>
	{#each data.myEvents || [] as myEvent}
		<section class="py-2">
			<div class="space-y-1 md:flex md:items-baseline md:space-x-4 md:space-y-0">
				<h2 id="4376-heading" class="text-lg font-medium text-gray-900 md:shrink-0">
					Order {myEvent.orderNumber}
				</h2>
				<div
					class="space-y-5 sm:flex sm:items-baseline sm:justify-between sm:space-y-0 md:min-w-0 md:flex-1"
				>
					<p class="text-sm font-medium text-gray-500">Event on January 22, 2021</p>
					<div class="flex text-sm font-medium">
						<a href="#" class="text-indigo-600 hover:text-indigo-500">Manage order</a>
						<div class="ml-4 border-l border-gray-200 pl-4 sm:ml-6 sm:pl-6">
							<a href="#" class="text-indigo-600 hover:text-indigo-500">View Invoice</a>
						</div>
					</div>
				</div>
			</div>

			<div class="-mb-6 mt-6 flow-root divide-y divide-gray-200 border-t border-gray-200">
				{#each myEvent.products as product}
					{@const eventName = product.options.find(
						(o) => o.key === 'eventName' || o.key === 'title'
					)?.value}
					<div class="py-6 sm:flex">
						<div class="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
							<img
								src={product.ecard?.imageURL ||
									product.eventTheme?.imageURL ||
									product.addOn?.imageURL}
								alt={`Product image for ${product.ecard?.name || product.eventTheme?.name || product.addOn?.name}`}
								class="size-20 flex-none rounded-md object-cover sm:size-48"
							/>
							<div class="min-w-0 flex-1 pt-1.5 sm:pt-0">
								<h3 class="text-sm font-medium text-gray-900">
									{product.ecard?.name || product.eventTheme?.name || product.addOn?.name}
								</h3>
								<p class="truncate text-sm text-gray-500">
									{#if product.ecard}
										<span>ECard</span>
									{:else if product.eventTheme}
										<span>Event</span>
									{:else if product.addOn}
										<span>AddOn Item</span>
									{/if}
									<span class="mx-1 text-gray-400" aria-hidden="true">&middot;</span>
									<span>{eventName}</span>
								</p>
							</div>
						</div>
						<div class="mt-6 space-y-4 sm:ml-6 sm:mt-0 sm:w-40 sm:flex-none">
							<button
								type="button"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:grow-0"
								>Buy again</button
							>
							<button
								type="button"
								class="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-full sm:grow-0"
								>Shop similar</button
							>
						</div>
					</div>
				{/each}

				<!-- More products... -->
			</div>
		</section>
	{/each}
</Container>
