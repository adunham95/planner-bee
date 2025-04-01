<script lang="ts">
	import TextArea from '../Inputs/TextArea.svelte';
	import TextInput from '../Inputs/TextInput.svelte';

	interface Props {
		signatures?: { name: string; message: string }[];
	}

	let { signatures = [] }: Props = $props();
</script>

<div class="mx-auto flow-root max-w-2xl px-2 @lg/ecard:mx-0 @lg/ecard:max-w-none">
	<div class=" @sm/ecard:columns-2 @sm/ecard:text-[0] @3xl/ecard:columns-3">
		{#each signatures as sign}
			<div class="pt-8 @sm/ecard:inline-block @sm/ecard:w-full sm:px-4">
				<figure class="rounded-2xl bg-custom-200 shadow-lg shadow-brand-50 p-8 text-sm leading-6">
					<blockquote class="text-gray-900">
						<p>
							{sign.message}
						</p>
					</blockquote>
					<figcaption class="mt-6 flex items-center gap-x-4">
						<div>
							<div class="font-semibold text-gray-900">{sign.name}</div>
						</div>
					</figcaption>
				</figure>
			</div>
		{/each}

		<form class="pt-8 @sm/ecard:inline-block @sm/ecard:w-full sm:px-4">
			<div class="rounded-2xl bg-custom-200 shadow-lg shadow-brand-50 p-8 text-sm leading-6">
				<h1 class="text-center text-xl text-custom-500">Sign Card</h1>
				<TextInput label="Name" showLabel id="name" />
				<TextArea id="message" label="Message" showLabel />
				<button class="btn w-full mt-2 btn-custom">Sign</button>
			</div>
		</form>
	</div>
</div>
