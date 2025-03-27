<script lang="ts">
	import { linear } from 'svelte/easing';

	interface Props {
		appTitle?: string;
		showNotification?: boolean;
		firstName?: string | null;
		lastName?: string | null;
		routes: { title: string; path: string }[];
		profileRoutes?: { title: string; path: string }[];
	}

	const {
		appTitle = 'Planner Bee',
		firstName,
		lastName,
		routes,
		profileRoutes = [],
		showNotification = false
	}: Props = $props();

	$inspect(routes);

	let mobileNabOpen = $state(false);
	let profileOpen = $state(false);
</script>

<header class="bg-surface shadow">
	<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-content-3 lg:px-8">
		<div class="relative flex h-16 justify-between">
			<div class="relative z-10 flex px-2 lg:px-0">
				<div class="flex shrink-0 items-center">
					<h2>{appTitle}</h2>
				</div>
			</div>
			<div class="relative z-10 flex items-center lg:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					onclick={() => (mobileNabOpen = !mobileNabOpen)}
					class="relative inline-flex items-center justify-center rounded-md p-2 text-content-2 hover:bg-content-2 hover:text-content-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">Open menu</span>
					<!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            -->
					<svg
						class={`${mobileNabOpen ? 'hidden' : 'block'} size-6`}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            -->
					<svg
						class={`${mobileNabOpen ? 'block' : 'hidden'} size-6`}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
				{#if showNotification}
					<button
						type="button"
						class="relative shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						<span class="absolute -inset-1.5"></span>
						<span class="sr-only">View notifications</span>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
							/>
						</svg>
					</button>
				{/if}

				<!-- Profile dropdown -->
				{#if profileRoutes.length > 0}
					<div class="relative ml-4 shrink-0">
						<div>
							<button
								type="button"
								onclick={() => (profileOpen = !profileOpen)}
								class="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="absolute -inset-1.5"></span>
								<span class="sr-only">Open user menu</span>
								<img
									class="size-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>

						<!--
              Dropdown menu, show/hide based on menu state.
  
              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
						<div
							class={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none ${profileOpen ? 'block' : 'hidden'}`}
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<div class="ml-4 min-w-0 flex-1">
								<div class="truncate text-base font-medium text-gray-800">
									{firstName}
									{lastName}
								</div>
								<!-- <div class="truncate text-sm font-medium text-gray-500">tom@example.com</div> -->
							</div>
							<!-- Active: "bg-gray-100 outline-none", Not Active: "" -->
							{#each profileRoutes as route}
								<a
									href={route.path}
									onclick={() => (profileOpen = !profileOpen)}
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0"
								>
									{route.title}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
		<nav class="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
			<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
			{#each routes as route}
				<a
					href={route.path}
					class="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
				>
					{route.title}
				</a>
			{/each}
		</nav>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class={`lg:hidden  ${mobileNabOpen ? 'block' : 'hidden'}`}>
		<!--
          Mobile menu overlay, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100"
            To: "opacity-0"
        -->
		<div class="fixed inset-0 z-20 bg-black/25" aria-hidden="true"></div>

		<!--
          Mobile menu, show/hide based on mobile menu state.
  
          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-150 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
		<div
			class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
		>
			<div class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
				<div class="pb-2 pt-3">
					<div class="flex items-center justify-between px-4">
						<div>
							<h2>{appTitle}</h2>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								onclick={() => (mobileNabOpen = !mobileNabOpen)}
								class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<span class="absolute -inset-0.5"></span>
								<span class="sr-only">Close menu</span>
								<svg
									class="size-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-3 space-y-1 px-2">
						{#each routes as route}
							<a
								href={route.path}
								onclick={() => (mobileNabOpen = !mobileNabOpen)}
								class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
							>
								{route.title}
							</a>
						{/each}
					</div>
				</div>
				{#if profileRoutes.length > 0}
					<div class="pb-2 pt-4">
						<div class="flex items-center px-5">
							<div class="shrink-0">
								<img
									class="size-10 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</div>
							<div class="ml-3 min-w-0 flex-1">
								<div class="truncate text-base font-medium text-gray-800">
									{firstName}
									{lastName}
								</div>
								<!-- <div class="truncate text-sm font-medium text-gray-500">tom@example.com</div> -->
							</div>
							<div class="flex items-center">
								{#if showNotification}
									<button
										type="button"
										class="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										<span class="absolute -inset-1.5"></span>
										<span class="sr-only">View notifications</span>
										<svg
											class="size-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
											data-slot="icon"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
											/>
										</svg>
									</button>
								{/if}
							</div>
						</div>
						<div class="mt-3 space-y-1 px-2">
							{#each profileRoutes as route}
								<a
									href={route.path}
									class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
								>
									{route.title}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>
