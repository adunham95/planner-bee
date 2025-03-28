<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		sectionTitle: string;
		content?: Snippet;
		sidebarContent?: Snippet;
	}

	const { sectionTitle, content, sidebarContent }: Props = $props();
</script>

<div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3">
	<h2 class="sr-only">{sectionTitle}</h2>
	<div class="sticky top-[120px]">
		{@render content?.()}
	</div>
</div>
<div class="lg:col-span-5">
	{@render sidebarContent?.()}
</div>
