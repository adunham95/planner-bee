<script>
	import UserStatusList from '$lib/components/UserStatusList.svelte';
</script>

<div class="mx-auto max-w-2xl px-6 py-4 lg:max-w-7xl lg:px-8">
	<div class="grid grid-cols-6 gap-2 min-h-5">
		<div class="col-span-4">
			<div>
				<div class="sm:hidden">
					<label for="tabs" class="sr-only">Select a tab</label>
					<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
					<select
						id="tabs"
						name="tabs"
						class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					>
						<option>My Account</option>
						<option>Company</option>
						<option selected>Team Members</option>
						<option>Billing</option>
					</select>
				</div>
				<div class="hidden sm:block">
					<div class="border-b border-gray-200">
						<nav class="-mb-px flex space-x-8" aria-label="Tabs">
							<!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
							<a
								href="#"
								class="whitespace-nowrap border-b-2 border-indigo-500 px-1 py-4 text-sm font-medium text-indigo-600"
								aria-current="page"
							>
								Event Details
							</a>
							<a
								href="#"
								class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							>
								RSVP List
							</a>
							<a
								href="#"
								class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							>
								Meal Train
							</a>
							<a
								href="#"
								class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							>
								Potluck
							</a>
							<a
								href="#"
								class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
							>
								Signatures
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-2">
			<UserStatusList
				users={[
					{
						firstName: 'Steve',
						lastName: 'Smith',
						email: 'ssmith@panthers.com',
						status: 'Accepted'
					},
					{
						firstName: 'Johnny',
						lastName: 'Ive',
						email: 'jive@apple.com',
						status: 'Declined'
					}
				]}
			/>
		</div>
	</div>
</div>
