<script lang="ts">
	interface Props {
		title?: string;
		subTitle?: string;
	}

	let { title = '', subTitle = '' }: Props = $props();
</script>

<div class="relative isolate">
	<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
		<div class="text-center">
			<h1 class="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				{title}
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				{subTitle}
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a
					href="#"
					class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Get started</a
				>
				<a href="#" class="text-sm font-semibold leading-6 text-gray-900"
					>Learn more <span aria-hidden="true">→</span></a
				>
			</div>
		</div>
	</div>
	<div
		class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"
	></div>
</div>
