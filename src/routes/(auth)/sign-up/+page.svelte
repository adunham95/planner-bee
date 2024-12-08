<script lang="ts">
	import { enhance } from '$app/forms';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
</script>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
	<div class="flex justify-center items-center py-2">
		<img class="w-[75px]" src="/images/logo-brand.svg" alt="Planner Bee Cards Logo" />
	</div>
	<h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
		Sign up for an account
	</h2>
	<div class="card">
		<form class="space-y-6" method="post" use:enhance>
			<TextInput id="firstName" label="First Name" showLabel />
			<TextInput id="lastName" label="Last Name" showLabel />
			<TextInput id="email" label="Email" showLabel />
			<TextInput id="password" label="Password" showLabel type="password" />
			<button class="btn mt-2 w-full">Create Account</button>
		</form>
	</div>
</div>
