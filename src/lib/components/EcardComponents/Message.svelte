<script lang="ts">
	export let value: string;
	export let style: string = '';
</script>

<p {style} class="mt-1 text-sm text-gray-500">
	{value}
</p>
