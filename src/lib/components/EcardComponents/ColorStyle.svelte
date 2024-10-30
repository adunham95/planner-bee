<script lang="ts">
	import { run } from 'svelte/legacy';

	import { browser } from '$app/environment';
	import { hexToTailwindPallette } from '$lib/utils/gererateColorValues';

	interface Props {
		color?: string;
	}

	let { color = '' }: Props = $props();

	function generateColor(tailwindPallette: { [key: string]: string }) {
		console.log('Running Colors');
		console.log(tailwindPallette);
		if (tailwindPallette && browser) {
			Object.entries(tailwindPallette).map(([key, value]) => {
				document.documentElement.style.setProperty(`--custom-color-${key}`, value);
			});
			return tailwindPallette;
		}
	}
	run(() => {
		if (color !== '') {
			const tailwindPallette = hexToTailwindPallette(color.trim(), false);
			if (tailwindPallette) {
				generateColor(tailwindPallette);
			}
		}
	});
</script>

<!-- <div class="flex gap-1 py-1 px-1">
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-100"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-200"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-300"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-400"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-500"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-600"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-700"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-800"></div>
	<div aria-hidden="true" class="h-8 w-8 rounded-full bg-custom-900"></div>
</div> -->

<!-- <style>
	.ecard {
		--custom-color-50: 247, 250, 252;
		--custom-color-100: 242, 247, 252;
		--custom-color-200: 220, 232, 247;
		--custom-color-300: 201, 216, 245;
		--custom-color-400: 162, 178, 235;
		--custom-color-500: 124, 133, 227;
		--custom-color-600: 102, 111, 204;
		--custom-color-700: 70, 77, 171;
		--custom-color-800: 45, 51, 135;
		--custom-color-900: 26, 31, 102;
	}
</style> -->
