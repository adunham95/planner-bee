<script>
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import Toggle from '$lib/components/Inputs/Toggle.svelte';
	import SidecarLayout from '$lib/components/layout/SidecarLayout.svelte';
	import ProductSlice from '$lib/components/ProductSlice.svelte';
	import { formatCurrency } from '$lib/utils/formatCurrency';

	export let data;
	console.log(data);
</script>

<SidecarLayout>
	<div class="divide-y divide-gray-200">
		<div class="pb-4">
			<h2 class="w-full pb-2 text-left text-lg font-medium text-gray-500">Sender</h2>
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
				<TextInput id="name" label="Name" showLabel />
				<TextInput id="email" label="Email" showLabel />
			</div>
		</div>

		<div class="pb-4">
			<h2 class="w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500">Recipient</h2>
			<div class="grid grid-cols-2 gap-2 pt-2">
				<TextInput id="firstName" label="First Name" showLabel />
				<TextInput id="lastName" label="Last Name" showLabel />
				<TextInput id="email" label="Email" showLabel class="col-span-2" />
			</div>
		</div>
		<div class="pb-4">
			<h2
				class="list-none w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500 cursor-pointer"
			>
				Delivery
			</h2>
			<Toggle id="imediate" label="Delivery is immediate" showLabel />
			<TextInput id="deliveryTime" label="Delivery Time" showLabel type="datetime-local" />
		</div>
	</div>
	<div class="flow-root" slot="sidecar">
		<ul role="list" class="-my-6 divide-y divide-gray-200 mb-2">
			{#if data.cart?.eCard}
				<li class="space-x-6">
					<ProductSlice
						src={data.cart.eCard?.imageURL}
						title={data.cart.eCard.name}
						price={data.cart.eCard.cost}
					/>
				</li>
			{/if}
			<!-- {#each data?.cart?.cartItems || [] as cartItem}
				<li class="flex space-x-6 py-6">
					<img
						src="https://tailwindui.com/plus/img/ecommerce-images/checkout-page-05-product-01.jpg"
						alt="Front of women&#039;s basic tee in heather gray."
						class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
					/>
					<div class="flex-auto">
						<div class="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
							<div class="flex-auto space-y-1 text-sm font-medium">
								<h3 class="text-gray-900">{cartItem.eCard.name}</h3>
								<p class="text-gray-900">{formatCurrency(cartItem.eCard.cost)}</p>
							</div>
						</div>
					</div>
				</li>
			{/each} -->

			<!-- More products... -->
		</ul>
		<div class="flex justify-end">
			<button class="btn">Send Card</button>
		</div>
	</div>
</SidecarLayout>
