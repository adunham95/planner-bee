<script lang="ts">
	interface Props {
		title?: string;
		subtitle?: string;
		actionLink?: string;
		actionCTA?: string;
		headers?: string[];
		children?: import('svelte').Snippet;
	}

	let {
		title = '',
		subtitle = '',
		actionLink = '',
		actionCTA = '',
		headers = [],
		children
	}: Props = $props();
</script>

<div class="sm:flex sm:items-center">
	<div class="sm:flex-auto">
		<h1 class="text-base font-semibold leading-6 text-gray-900">{title}</h1>
		<p class="mt-2 text-sm text-gray-700">{subtitle}</p>
	</div>
	{#if actionLink}
		<div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
			<a href={actionLink} class="btn btn-large">{actionCTA}</a>
		</div>
	{/if}
</div>
<div class="mt-8 flow-root">
	<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
			<table class="min-w-full divide-y divide-gray-300">
				<thead>
					<tr>
						{#each headers as header}
							<th
								scope="col"
								class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
							>
								{header}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					{@render children?.()}
				</tbody>
			</table>
		</div>
	</div>
</div>
