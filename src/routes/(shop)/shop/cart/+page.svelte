<script lang="ts">
	import { enhance } from '$app/forms';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import Toggle from '$lib/components/Inputs/Toggle.svelte';
	import SidecarLayout from '$lib/components/layout/SidecarLayout.svelte';
	import ProductSlice from '$lib/components/ProductSlice.svelte';
	import UpsellRow from '$lib/components/UpsellRow.svelte';
	import { formatCurrency } from '$lib/utils/formatCurrency';

	let { data, form } = $props();

	$inspect(form);
	$inspect(data);
</script>

<SidecarLayout>
	<form
		id="cart-form"
		method="POST"
		action="?/checkout"
		use:enhance
		class="divide-y divide-gray-200"
	>
		<div class="pb-4">
			<h2 class="w-full pb-2 text-left text-lg font-medium text-gray-500">Sender</h2>
			{#if !data.user}
				<a href="login" class="btn btn-large w-full block text-center mb-2">Login</a>
				<div class="relative">
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="w-full border-t border-gray-300"></div>
					</div>
					<div class="relative flex justify-center">
						<span class="bg-white px-2 text-sm text-gray-500">Or continue as guest</span>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-2 pt-2">
					<TextInput id="senderName" label="Name" showLabel />
					<TextInput id="senderEmail" label="Email" showLabel />
				</div>
			{:else}
				<div class="grid grid-cols-2 gap-2 pt-2">
					<TextInput id="senderName" label="Name" showLabel value={data.user?.firstName} />
					<TextInput id="senderEmail" label="Email" showLabel value={data.user?.email} />
				</div>
			{/if}
		</div>

		<!-- Recipient -->
		<!-- <div class="pb-4">
			<h2 class="w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500">Recipient</h2>
			<div class="grid grid-cols-2 gap-2 pt-2">
				<TextInput id="recipientFirstName" label="First Name" showLabel />
				<TextInput id="recipientLastName" label="Last Name" showLabel />
				<TextInput id="recipientEmail" label="Email" showLabel class="col-span-2" />
			</div>
		</div> -->

		<!-- Delivery -->
		<!-- <div class="pb-4">
			<h2
				class="list-none w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500 cursor-pointer"
			>
				Delivery
			</h2>
			<Toggle id="imediate" label="Delivery is immediate" showLabel />
			<TextInput id="deliveryTime" label="Delivery Time" showLabel type="datetime-local" />
		</div> -->

		<!-- <div class="pb-4">
			<h2
				class="list-none w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500 cursor-pointer"
			>
				Add On Products
			</h2>
			<UpsellRow options={[{ title: 'ECard', url: '/ecard' }]} />
		</div> -->

		<!-- Account Benefits -->
		{#if !data.user}
			<div class="pt-6">
				<h2 class="w-full pt-2 pb-2 text-left text-lg font-medium text-gray-500">
					Account Benefits
				</h2>
				<p class="mt-2 text-sm text-gray-500">Create an account and explore</p>

				<dl class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
					<div class="border-t border-blue-200 pt-4">
						<dt class="font-medium text-gray-900">Order History</dt>
						<dd class="mt-2 text-sm text-gray-500">See your order history all in once place</dd>
					</div>
					<div class="border-t border-green-200 pt-4">
						<dt class="font-medium text-gray-900">Purchase</dt>
						<dd class="mt-2 text-sm text-gray-500">
							Add a credit card to purchase more custom options
						</dd>
					</div>
					<div class="border-t border-pink-200 pt-4">
						<dt class="font-medium text-gray-900">Contacts</dt>
						<dd class="mt-2 text-sm text-gray-500">Save contacts for easier checkout</dd>
					</div>
					<div class="border-t border-purple-200 pt-4">
						<dt class="font-medium text-gray-900">Schedule</dt>
						<dd class="mt-2 text-sm text-gray-500">Pre Schedule careCards for recipients</dd>
					</div>
				</dl>
			</div>
		{/if}
	</form>
	{#snippet sidecar()}
		<div class="flow-root">
			<ul role="list" class="-my-6 divide-y divide-gray-200 mb-2">
				{#if data?.products}
					{#each data?.products || [] as product}
						{#if product.eCardTemplate}
							<li class="space-x-6">
								<ProductSlice
									eCardId={product.id}
									src={product.eCardTemplate.imageURL}
									title={`${product.eCardTemplate.name} ECard`}
									price={product.eCardTemplate.cost}
									subOptions={product.addOns}
								/>
							</li>
						{/if}
						{#if product.eventTemplate}
							<li class="space-x-6">
								<ProductSlice
									eventId={product.id}
									src={product.eventTemplate.imageURL}
									title={product.eventTemplate.name}
									price={product.eventTemplate.cost || 0}
									subOptions={product.addOns}
								/>
							</li>
						{/if}
					{/each}
				{/if}
			</ul>
			<dl class="space-y-6 text-sm font-medium text-gray-500 border-t border-gray-200 pt-6">
				{#each data?.orderEstimate?.lineItems || [] as lineItems}
					<div class="flex justify-between">
						<dt>{lineItems.title}</dt>
						<dd class="text-gray-900">{formatCurrency(lineItems.value)}</dd>
					</div>
				{/each}

				<div class="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
					<dt class="text-base">Total</dt>
					<dd class="text-base">{formatCurrency(data?.orderEstimate?.total || 0)}</dd>
				</div>
			</dl>
			<div class="flex justify-end pt-4">
				<button form="cart-form" type="submit" class="btn w-full btn-large">Checkout</button>
			</div>
		</div>
	{/snippet}
</SidecarLayout>
