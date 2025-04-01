<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatCurrency';

	interface Props {
		name?: string;
		price?: number | null;
		formName?: string;
		description?: string;
		buttonText?: string;
		imageURL?: string | null;
	}

	const {
		name,
		price,
		formName,
		description,
		buttonText = 'Add To Cart',
		imageURL
	}: Props = $props();
</script>

<div class="bg-white sticky top-0 z-40">
	<div class="flex flex-col border-b border-gray-200 lg:border-0">
		<div aria-label="Offers" class="order-last lg:order-first">
			<div
				class="mx-auto max-w-7xl md:px-8 py-6 flex flex-col md:flex-row justify-between items-center"
			>
				<div class="flex">
					{#if imageURL}
						<img
							src={imageURL}
							alt="Product Show"
							class="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center mr-4"
						/>
					{/if}
					<div class="mb-2 md:mb-0">
						<h1 class="text-2xl font-semibold text-gray-900">{name}</h1>
						{#if description}
							<p class="text-sm text-gray-500">{description}</p>
						{/if}
						<p class="text-sm font-semibold text-brand-600">
							{formatCurrency(price || 0)}
						</p>
					</div>
				</div>
				<button class="btn btn-lg" form={formName}>{buttonText}</button>
			</div>
		</div>
	</div>
</div>
