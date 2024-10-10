<script>
	import SidecarLayout from '$lib/components/layout/SidecarLayout.svelte';
</script>

<SidecarLayout>
	<div class="divide-y divide-gray-200">
		<details class="pb-4">
			<summary
				class="list-none w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500 cursor-pointer"
				>Sender</summary
			>
			<div class="group flex items-center" aria-orientation="horizontal" role="tablist">
				<!-- Selected: "bg-gray-100 text-gray-900 hover:bg-gray-200", Not Selected: "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900" -->
				<button
					id="tabs-1-tab-1"
					class="rounded-md border border-transparent bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
					aria-controls="tabs-1-panel-1"
					role="tab"
					type="button">Write</button
				>
				<!-- Selected: "bg-gray-100 text-gray-900 hover:bg-gray-200", Not Selected: "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900" -->
				<button
					id="tabs-1-tab-2"
					class="ml-2 rounded-md border border-transparent bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900"
					aria-controls="tabs-1-panel-2"
					role="tab"
					type="button">Preview</button
				>

				<!-- These buttons are here simply as examples and don't actually do anything. -->
				<div
					class="ml-auto hidden items-center space-x-5 group-has-[*:first-child[aria-selected='true']]:flex"
				>
					<div class="flex items-center">
						<button
							type="button"
							class="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
						>
							<span class="sr-only">Insert link</span>
							<svg
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"
								/>
								<path
									d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"
								/>
							</svg>
						</button>
					</div>
					<div class="flex items-center">
						<button
							type="button"
							class="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
						>
							<span class="sr-only">Insert code</span>
							<svg
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
					<div class="flex items-center">
						<button
							type="button"
							class="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
						>
							<span class="sr-only">Mention someone</span>
							<svg
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div class="mt-2">
				<div
					id="tabs-1-panel-1"
					class="-m-0.5 rounded-lg p-0.5"
					aria-labelledby="tabs-1-tab-1"
					role="tabpanel"
					tabindex="0"
				>
					<label for="comment" class="sr-only">Comment</label>
					<div>
						<textarea
							rows="5"
							name="comment"
							id="comment"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							placeholder="Add your comment..."
						></textarea>
					</div>
				</div>
				<div
					id="tabs-1-panel-2"
					class="-m-0.5 rounded-lg p-0.5"
					aria-labelledby="tabs-1-tab-2"
					role="tabpanel"
					tabindex="0"
				>
					<div class="border-b">
						<div class="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5 text-gray-800">
							Preview content will render here.
						</div>
					</div>
				</div>
			</div>
		</details>
		<details class="pb-4">
			<summary
				class="list-none w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500 cursor-pointer"
				>Recipient</summary
			>
			Something small enough to escape casual notice.
		</details>
		<details class="pb-4">
			<summary
				class="list-none w-full pt-6 pb-2 text-left text-lg font-medium text-gray-500 cursor-pointer"
			>
				Delivery
			</summary>
			Something small enough to escape casual notice.
		</details>
	</div>
	<div class="flow-root" slot="sidecar">
		<ul role="list" class="-my-6 divide-y divide-gray-200">
			<li class="flex space-x-6 py-6">
				<img
					src="https://tailwindui.com/plus/img/ecommerce-images/checkout-page-05-product-01.jpg"
					alt="Front of women&#039;s basic tee in heather gray."
					class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
				/>
				<div class="flex-auto">
					<div class="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
						<div class="flex-auto space-y-1 text-sm font-medium">
							<h3 class="text-gray-900">
								<a href="#">Women&#039;s Basic Tee</a>
							</h3>
							<p class="text-gray-900">$32.00</p>
							<p class="hidden text-gray-500 sm:block">Gray</p>
							<p class="hidden text-gray-500 sm:block">S</p>
						</div>
					</div>
				</div>
			</li>

			<!-- More products... -->
		</ul>
	</div>
</SidecarLayout>
