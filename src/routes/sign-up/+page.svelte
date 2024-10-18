<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallContainer from '$lib/components/Containers/SmallContainer.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import LoginShell from '$lib/components/Shells/LoginShell.svelte';
</script>

<!-- <SmallContainer>
	<h1>Sign up</h1>
	<div>
		<form method="post" use:enhance>
			<TextInput id="email" label="Email" showLabel />
			<TextInput id="password" label="Password" showLabel type="password" />
			<button class="btn mt-2">Continue</button>
		</form>
	</div>
</SmallContainer> -->

<LoginShell>
	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="card">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
						>Email address</label
					>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
						>Password</label
					>
					<div class="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input
							id="remember-me"
							name="remember-me"
							type="checkbox"
							class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
						<label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900"
							>Remember me</label
						>
					</div>

					<div class="text-sm leading-6">
						<a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
							>Forgot password?</a
						>
					</div>
				</div>

				<div>
					<button type="submit" class="btn w-full btn-large">Sign in</button>
				</div>
			</form>
		</div>
	</div></LoginShell
>
