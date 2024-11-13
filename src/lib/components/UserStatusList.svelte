<script lang="ts">
	import UserIcon from './Icons/UserIcon.svelte';

	interface User {
		firstName?: string;
		lastName?: string;
		email: string;
		status?: string;
	}

	interface Props {
		users?: User[];
	}
	let { users = [] }: Props = $props();
</script>

<ul role="list" class="divide-y divide-gray-100">
	{#each users as user}
		<li class="flex items-center justify-between gap-x-6 py-5">
			<div class="flex min-w-0 gap-x-4">
				<div
					class="h-12 w-12 flex-none rounded-full bg-gray-300 text-blue-400 flex justify-center items-center"
				>
					<UserIcon />
				</div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm/6 font-semibold text-gray-900">
						{user.firstName || 'Little'}
						{user.lastName || 'Bee'}
					</p>
					<p class="mt-1 truncate text-xs/5 text-gray-500">{user.email}</p>
				</div>
			</div>
			<span
				class="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
			>
				{user.status}
			</span>
		</li>
	{/each}
</ul>
