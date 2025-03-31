<script>
	import { enhance } from '$app/forms';

	import DisplaySection from '../../components/DisplaySection.svelte';
	import DisplayTitle from '../../components/DisplayTitle.svelte';
</script>

<div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-4">
	<form
		method="POST"
		id="add-to-cart"
		action="?/addToCart"
		use:enhance
		class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8 relative"
	>
		<DisplaySection sectionTitle="Add to Cart">
			{#snippet sidebarContent()}
				<DisplayTitle title="Select and ECard" />
				<fieldset class="pb-4">
					<div class="flex justify-end">
						<button class="btn btn-lg" form="add-to-cart">Add to cart</button>
					</div>
				</fieldset>
			{/snippet}
		</DisplaySection>
		<DisplaySection sectionTitle="Add to Cart">
			{#snippet sidebarContent()}
				<DisplayTitle title="Select Recipients" />
				<!-- <fieldset class="pb-4">
					<div class="flex justify-end">
						<button class="btn btn-lg" form="add-to-cart">Add to cart</button>
					</div>
				</fieldset> -->
			{/snippet}
		</DisplaySection>
	</form>
</div>
