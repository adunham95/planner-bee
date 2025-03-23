<script lang="ts">
	import { enhance } from '$app/forms';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import InviteStatus from '$lib/components/InviteStatus.svelte';
	import { formatCurrency } from '$lib/utils/formatCurrency';

	let { data } = $props();
	console.log(data);
</script>

<main class="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
	<h1 class="text-3xl font-bold tracking-tight text-gray-900">Order Details</h1>

	<div class="mt-2 pb-5 text-sm sm:flex sm:justify-between">
		<dl class="flex">
			<dt class="text-gray-500">Order number&nbsp;</dt>
			<dd class="font-medium text-gray-900">{data.order?.orderNumber}</dd>
			<dt>
				<span class="sr-only">Date</span>
				<span class="mx-2 text-gray-400" aria-hidden="true">&middot;</span>
			</dt>
			<dd class="font-medium text-gray-900"><time datetime="2021-03-22">March 22, 2021</time></dd>
		</dl>
	</div>

	<section aria-labelledby="order-heading" class="mt-10 border-t border-gray-200">
		<h2 id="order-heading" class="sr-only">Your order</h2>

		<h3 class="sr-only">Items</h3>

		{#if data.order}
			{#each data?.order?.products as product}
				{#if product.ecard}
					{@render orderCard(
						product.ecard.imageURL || undefined,
						product.ecard.name,
						product.ecard.description,
						product.ecard.cost,
						product.options.length
					)}
				{/if}
				{#if product.eventTheme}
					{@render orderCard(
						product.eventTheme.imageURL || undefined,
						product.eventTheme.name,
						product.eventTheme.description,
						product.eventTheme.cost || 0,
						product.options.length
					)}
				{/if}
				{#if product.addOn}
					{@render orderCard(
						product.addOn.imageURL || undefined,
						product.addOn.name,
						product.addOn.description,
						product.addOn.cost || 0,
						product.options.length
					)}
				{/if}
			{/each}
		{/if}

		<div class="sm:ml-40 sm:pl-6">
			<h4 class="font-medium text-gray-90 pt-10">Recipients/Attendees</h4>

			<ul role="list" class="divide-y divide-gray-300">
				{#each data.order?.recipients || [] as recipient}
					<li class="flex justify-between gap-x-6 py-5">
						<div class="flex min-w-0 gap-x-4">
							<div class="min-w-0 flex-auto">
								<div class="inline-flex">
									<p class="text-sm/6 font-semibold text-gray-900">
										{recipient.firstName}
										{recipient.lastName}
									</p>
									<InviteStatus status={recipient.rsvpStatus} />
								</div>
								<p class="mt-1 truncate text-xs/5 text-gray-500">{recipient.email}</p>
								<p class="mt-1 truncate text-xs/5 text-gray-500">{recipient.phone}</p>
							</div>
						</div>
						<div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end"></div>
						<div class="flex flex-col">
							<button class="btn btn-small btn-text">Send Email</button>
							<button class="btn btn-small btn-text">Send Text</button>
						</div>
					</li>
				{/each}
				<li>
					<form
						use:enhance
						method="post"
						action="?/addRecipient"
						class="mt-2 text-gray-700 grid grid-cols-2 gap-x-6 gap-y-4"
					>
						<input class="hidden" value={data.order?.id} name="orderID" />
						<TextInput showLabel label="First name" id="firstName" />
						<TextInput showLabel label="Last name" id="lastName" />
						<TextInput showLabel label="Email" id="email" type="email" />
						<TextInput showLabel label="Phone" id="phone" type="tel" />
						<div class="flex justify-end col-span-2">
							<button class="btn">Add recipient</button>
						</div>
					</form>
				</li>
			</ul>

			<!-- <h4 class="sr-only">Payment</h4>
			<dl class="grid grid-cols-2 gap-x-6 border-t border-gray-200 py-10 text-sm">
				<div>
					<dd class="mt-2 text-gray-700">
						<p>Apple Pay</p>
						<p>Mastercard</p>
						<p><span aria-hidden="true">••••</span><span class="sr-only">Ending in </span>1545</p>
					</dd>
				</div>
				<div>
					<dt class="font-medium text-gray-900">Shipping method</dt>
					<dd class="mt-2 text-gray-700">
						<p>DHL</p>
						<p>Takes up to 3 working days</p>
					</dd>
				</div>
			</dl> -->

			<!-- <h3 class="sr-only">Summary</h3>

			<dl class="space-y-6 border-t border-gray-200 pt-10 text-sm">
				<div class="flex justify-between">
					<dt class="font-medium text-gray-900">Subtotal</dt>
					<dd class="text-gray-700">$36.00</dd>
				</div>
				<div class="flex justify-between">
					<dt class="flex font-medium text-gray-900">
						Discount
						<span class="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600"
							>STUDENT50</span
						>
					</dt>
					<dd class="text-gray-700">-$18.00 (50%)</dd>
				</div>
				<div class="flex justify-between">
					<dt class="font-medium text-gray-900">Shipping</dt>
					<dd class="text-gray-700">$5.00</dd>
				</div>
				<div class="flex justify-between">
					<dt class="font-medium text-gray-900">Total</dt>
					<dd class="text-gray-900">$23.00</dd>
				</div>
			</dl> -->
		</div>
	</section>
</main>

{#snippet orderCard(
	imageURL: string | undefined,
	name: string,
	description: string,
	cost: number | null,
	elementsLength = 0
)}
	<div class="flex space-x-6 border-b border-gray-200 py-10">
		<img
			src={imageURL || '/images/card-flower.jpg'}
			alt="Glass bottle with black plastic pour top and mesh insert."
			class="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
		/>
		<div class="flex flex-auto flex-col">
			<div>
				<h4 class="font-medium text-gray-900">
					{name}
				</h4>
				<p class="mt-2 text-sm text-gray-600">
					{description}
				</p>
			</div>
			<div class="mt-6 flex flex-1 items-end">
				<dl class="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
					<div class="flex">
						<dt class="font-medium text-gray-900">Elements</dt>
						<dd class="ml-2 text-gray-700">x{elementsLength || 0}</dd>
					</div>
					<div class="flex pl-4 sm:pl-6">
						<dt class="font-medium text-gray-900">Price</dt>
						<dd class="ml-2 text-gray-700">{formatCurrency(cost || 0)}</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
{/snippet}
