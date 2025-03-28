<script lang="ts">
	interface Props {
		title: string;
		subTitle?: string | null;
	}
	const { title, subTitle }: Props = $props();
</script>

<h2 class="text-xl font-medium text-gray-900 pb-2">{title}</h2>
{#if subTitle}
	<p class="text-sm text-brand-500 pb-2">{subTitle}</p>
{/if}
