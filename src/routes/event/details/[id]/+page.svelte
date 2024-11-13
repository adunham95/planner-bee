<script>
	import UserStatusList from '$lib/components/UserStatusList.svelte';
</script>

<div class="mx-auto max-w-2xl px-6 py-4 lg:max-w-7xl lg:px-8">
	<div class="grid grid-cols-6 gap-2 min-h-5">
		<div class="col-span-4 bg-green-50"></div>
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
