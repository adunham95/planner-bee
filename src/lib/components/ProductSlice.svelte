<script lang="ts">
	import { enhance } from '$app/forms';
	import { formatCurrency } from '$lib/utils/formatCurrency';

	interface Props {
		src?: string | null;
		title?: string;
		descriptionList?: string[];
		price?: number;
		eventId?: string;
		eCardId?: string;
		subOptions?: { id: string; imageURL: string; name: string; cost: number }[];
	}

	let {
		eCardId,
		eventId,
		src,
		title = '',
		descriptionList = [],
		price = 0,
		subOptions = []
	}: Props = $props();
</script>

<div class=" py-6">
	<div class="flex space-x-6">
		<img
			src={src || '/images/card-flower.jpg'}
			alt="Product Show"
			class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
		/>
		<div class="flex-auto">
			<div class="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
				<div class="flex-auto space-y-1 text-sm font-medium">
					<h3 class="text-gray-900 text-base font-medium flex items-center">
						{title}
						<form class="ml-2 inline-flex items-center" method="post" action="?/remove" use:enhance>
							{#if eCardId}
								<input hidden class="hidden" name="eCardID" value={eCardId} />
							{/if}
							{#if eventId}
								<input hidden class="hidden" name="eventID" value={eventId} />
							{/if}
							<button class="text-xs font-medium text-indigo-600 hover:text-indigo-500">
								Remove
							</button>
						</form>
					</h3>
					<p class="text-gray-900">{formatCurrency(price)}</p>
					{#each descriptionList as description}
						<p class="text-gray-400">{description}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="flex pt-2 items-start">
		<div class=" grid grid-cols-2 w-24 gap-1">
			{#each subOptions.slice(0, 4) as option}
				<div class="">
					{@render subSlice(option.id, option.imageURL, option.name, option.cost)}
				</div>
			{/each}
		</div>
		<div class="pl-4">
			<h3 class="text-gray-900 text-base font-medium flex items-center">
				<p class="">Add Ons</p>
			</h3>
			{#each subOptions as option}
				<p class="text-gray-900 text-xs flex items-center">
					{option.name}
				</p>
			{/each}
		</div>
	</div>
</div>

{#snippet subSlice(id = '', imageURL = '', name = '', price = 0)}
	<div class="flex">
		<img
			src={imageURL || '/images/card-flower.jpg'}
			alt="Product Show"
			class="h-12 w-12 flex-none rounded-md bg-gray-100 object-cover object-center"
		/>
		<!-- <h3 class="text-gray-900 text-xs font-medium flex items-center pl-1">
			<p class="px-1">
				{name}
			</p>
			<p class="text-gray-900">{formatCurrency(price)}</p>

			<form class="ml-2 inline-flex items-center" method="post" action="?/remove" use:enhance>
				<input class="hidden" name="addOnID" value={id} />
				<button class="text-xs font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
			</form>
		</h3> -->
	</div>
{/snippet}
