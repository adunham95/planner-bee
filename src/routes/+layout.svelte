<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let mobileMenuOpen = $state(false);

	const links = [
		{ name: 'eCards', href: '/ecard' },
		{ name: 'eVents', href: '/event' },
		{ name: 'Add Ons', href: '/add-ons' }
	];

	let { data, children } = $props();
</script>

<div class="bg-white">
	<div
		class={`${mobileMenuOpen ? 'block' : 'hidden'} relative z-40 lg:hidden`}
		role="dialog"
		aria-modal="true"
	>
		<div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

		<div class="fixed inset-0 z-40 flex">
			<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
				<div class="flex px-4 pb-2 pt-5">
					<button
						onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
						type="button"
						class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
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

				<!-- Links -->

				<div class="space-y-6 border-t border-gray-200 px-4 py-6">
					{#if !data?.user}
						<div class="flex flex-1 items-center space-x-3">
							<a href="/login" class="-m-2 block p-2 font-medium text-gray-900"> Sign in </a>
							<span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
							<a href="/sign-up" class="-m-2 block p-2 font-medium text-gray-900">
								Create account
							</a>
						</div>
					{/if}
					{#each links as link}
						<div class="flow-root">
							<a href={link.href} class="-m-2 block p-2 font-medium text-gray-900">{link.name}</a>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<header class="relative bg-white">
		<nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="border-b border-gray-200">
				<div class="flex h-16 items-center justify-between">
					<div class="flex flex-1 items-center lg:hidden">
						<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
						<button
							onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
							type="button"
							class="-ml-2 rounded-md bg-white p-2 text-gray-400"
						>
							<span class="sr-only">Open menu</span>
							<svg
								class="h-6 w-6"
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
						</button>
					</div>

					<div class="hidden lg:block lg:flex-1 lg:self-stretch">
						<div class="flex h-full space-x-8">
							{#each links as link}
								<a
									href={link.href}
									class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
								>
									{link.name}
								</a>
							{/each}
						</div>
					</div>

					<!-- Logo -->
					<a href="/" class="flex">
						<span class="sr-only">Planner Bee</span>
						<img class="h-8 w-8" src="/images/logo-white.svg" alt="" />
					</a>

					<div class="flex flex-1 items-center justify-end">
						<!-- Account -->
						{#if data?.user}
							<a href="/dashboard" class="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
								<span class="sr-only">Account</span>
								<svg
									class="h-6 w-6"
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
										d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
									/>
								</svg>
							</a>
						{:else}
							<div class="hidden sm:flex flex-1 items-center justify-end lg:space-x-6 space-x-3">
								<a href="/login" class="text-sm font-medium text-gray-700 hover:text-gray-800">
									Sign in
								</a>
								<span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
								<a href="/sign-up" class="text-sm font-medium text-gray-700 hover:text-gray-800">
									Create account
								</a>
							</div>
						{/if}

						<!-- CART -->
						<div class="ml-4 flow-root lg:ml-6">
							<a href="/cart" class="group -m-2 flex items-center p-2">
								<svg
									class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
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
										d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
									/>
								</svg>
								<span class="sr-only">View Cart</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</div>

{@render children?.()}

<Footer />
