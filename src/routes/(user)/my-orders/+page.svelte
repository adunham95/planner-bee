<script lang="ts">
	import PageHeaderShell from '$lib/components/Shells/PageHeaderShell.svelte';
	import { formatCurrency } from '$lib/utils/formatCurrency';
	import type { Order } from '../../../models/interfaces.js';
	let { data } = $props();
	console.log(data);
</script>

<PageHeaderShell title="Orders">
	<div class="space-y-4">
		{#each data.orders as order}
			{@render orderCard(order)}
		{/each}
	</div>
</PageHeaderShell>

{#snippet orderCard({ createdAt, orderNumber = '', recipients = [], eCard }: Order)}
	<div class="mx-auto max-w-7xl sm:px-2 lg:px-8">
		<div class="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
			<div class="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border">
				<dl
					class="p-4 sm:p-6 border-b border-gray-200 grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-4"
				>
					<div>
						<dt class="font-medium text-gray-900">Order number</dt>
						<dd class="mt-1 text-gray-500">{orderNumber}</dd>
					</div>
					<div class="hidden sm:block">
						<dt class="font-medium text-gray-900">Date placed</dt>
						<dd class="mt-1 text-gray-500">
							<time datetime="2021-07-06">{createdAt}</time>
						</dd>
					</div>
					<div>
						<dt class="font-medium text-gray-900">Total amount</dt>
						<dd class="mt-1 font-medium text-gray-900">$160.00</dd>
					</div>
					<div>
						<dt class="font-medium text-gray-900">Recipients</dt>
						<dd class="mt-1 font-medium text-gray-900">{recipients.length}</dd>
					</div>
				</dl>

				<!-- Products -->
				<h4 class="sr-only">Items</h4>
				<ul role="list" class="divide-y divide-gray-200">
					{#if eCard}
						<li class="p-4 sm:p-6">
							<div class="flex items-center sm:items-start">
								<div class="size-20 shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:size-40">
									<img
										src={eCard.imageURL || '/images/balloons.jpg'}
										alt=""
										class="size-full object-cover object-center"
									/>
								</div>
								<div class="ml-6 flex-1 text-sm">
									<div class="font-medium text-gray-900 sm:flex sm:justify-between">
										<h5>{eCard.name}</h5>
										<p class="mt-2 sm:mt-0">{formatCurrency(eCard.cost || 0)}</p>
									</div>
									<p class="hidden text-gray-500 sm:mt-2 sm:block">
										{eCard.description}
									</p>
									<div></div>
								</div>
							</div>
						</li>
					{/if}
				</ul>
				<div class="p-4 flex justify-end">
					<div
						class="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0"
					>
						<div class="flex flex-1 justify-center">
							<a
								href={`/my-orders/${orderNumber}`}
								class="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
							>
								View Order
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- More orders... -->
		</div>
	</div>
{/snippet}
