<script lang="ts">
	export let title = '';
	export let description = '';
</script>

<div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
	<div class="py-24">
		<h1 class="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
		<p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
			{description}
		</p>
	</div>
</div>
