<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency';

	export let data;
</script>

<div class="flex flex-col border-b border-gray-200 lg:border-0">
	<nav aria-label="Offers" class="order-last lg:order-first bg-white">
		<div class="mx-auto max-w-7xl lg:px-8">
			<ul
				role="list"
				class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
			>
				<li
					class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
				>
					<p class="font-semibold text-gray-900">Automate the event</p>
				</li>
				<li
					class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
				>
					<p class="font-semibold text-gray-900">Collaborate with Guests</p>
				</li>
				<li
					class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
				>
					<p class="font-semibold text-gray-900">Customize your event</p>
				</li>
			</ul>
		</div>
	</nav>

	<div class="relative">
		<div aria-hidden="true" class="absolute hidden h-full w-1/2 lg:block"></div>
		<div class="relative lg:bg-transparent">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
				<div class="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
					<div class="lg:pr-16">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
							Focus on what matters
						</h1>
						<p class="mt-4 text-xl text-gray-600">Spending time with your guests</p>
					</div>
				</div>
			</div>
		</div>
		<div class="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
			<img src="/images/event-table.jpg" alt="" class="h-full w-full object-cover object-center" />
		</div>
	</div>
</div>

<div
	class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
>
	<div>
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Event Features</h2>
		<p class="mt-4 text-gray-500">
			The event platform can handel as much or as little as you want.
		</p>

		<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">ECard Invitations</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Use ECard Invitations to digitally send invitations to your guests
				</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Enhancements</dt>
				<dd class="mt-2 text-sm text-gray-500">
					A list of enhancements can be added to event to make the event even better
				</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Dimensions</dt>
				<dd class="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Finish</dt>
				<dd class="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Includes</dt>
				<dd class="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
			</div>
			<div class="border-t border-gray-200 pt-4">
				<dt class="font-medium text-gray-900">Considerations</dt>
				<dd class="mt-2 text-sm text-gray-500">
					Made from natural materials. Grain and color vary with each item.
				</dd>
			</div>
		</dl>
	</div>
	<div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-01.jpg"
			alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
			class="rounded-lg bg-gray-100"
		/>
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg"
			alt="Top down view of walnut card tray with embedded magnets and card groove."
			class="rounded-lg bg-gray-100"
		/>
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg"
			alt="Side of walnut card tray with card groove and recessed card area."
			class="rounded-lg bg-gray-100"
		/>
		<img
			src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
			alt="Walnut card tray filled with cards and card angled in dedicated groove."
			class="rounded-lg bg-gray-100"
		/>
	</div>
</div>

<div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
	<div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
		<h2 class="text-2xl font-bold tracking-tight text-gray-900">Themes</h2>
	</div>

	<div class="relative mt-8">
		<div class="relative -mb-6 w-full overflow-x-auto pb-6">
			<ul
				role="list"
				class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
			>
				{#each data.products as product}
					<li class="inline-flex w-64 flex-col text-center lg:w-auto">
						<a href={`/event/${product.sku}`} class="group relative">
							<div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
								<img
									src={product.imageURL || '/images/happy.jpg'}
									alt="Black machined steel pen with hexagonal grip and small white logo at top."
									class="h-full w-full object-cover object-center group-hover:opacity-75"
								/>
							</div>
							<div class="mt-6">
								<h3 class="mt-1 font-semibold text-gray-900">
									<span class="absolute inset-0"></span>
									{product.name}
								</h3>
								<p class="mt-1 text-gray-900">{formatCurrency(product.cost || 0)}</p>
							</div>
						</a>
					</li>
				{/each}
				<!-- More products... -->
			</ul>
		</div>
	</div>
</div>
