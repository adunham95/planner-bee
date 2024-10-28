<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 * @property {import('svelte').Snippet} [sidecar]
	 */

	/** @type {Props} */
	let { children, sidecar } = $props();
</script>

<main class="pt-4 pb-8">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="sr-only">Page title</h1>
		<!-- Main 3 column grid -->
		<div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
			<!-- Left column -->
			<div class="grid grid-cols-1 gap-4 lg:col-span-2">
				<section aria-labelledby="section-1-title">
					<h2 class="sr-only" id="section-1-title">Section title</h2>
					<div class="overflow-hidden rounded-lg bg-white shadow">
						<div class="p-6">
							{@render children?.()}
						</div>
					</div>
				</section>
			</div>

			<!-- Right column -->
			<div class="grid grid-cols-1 gap-4">
				<section aria-labelledby="section-2-title">
					<h2 class="sr-only" id="section-2-title">Section title</h2>
					<div class="overflow-hidden rounded-lg bg-white shadow">
						<div class="p-6">
							{@render sidecar?.()}
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</main>
