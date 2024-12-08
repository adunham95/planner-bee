<script lang="ts">
	import { enhance } from '$app/forms';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import type { PageData } from '../$types';
	import type { ActionData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();

	console.log({ data, form });

	$inspect(form);
</script>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
	<div class="flex justify-center items-center py-2">
		<img class="w-[75px]" src="/images/logo-brand.svg" alt="Planner Bee Cards Logo" />
	</div>
	<h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
		Sign in to your account
	</h2>
	<div class="card">
		<form class="space-y-6" method="post" use:enhance>
			<TextInput id="email" label="Email" showLabel />
			<TextInput id="password" label="Password" showLabel type="password" />
			<div class="text-sm/6 flex justify-end">
				<a href="/reset-password" class="font-semibold text-brand-600 hover:text-brand-500"
					>Forgot password?</a
				>
			</div>
			<button class="btn btn-large w-full">Login</button>
		</form>
	</div>
</div>
