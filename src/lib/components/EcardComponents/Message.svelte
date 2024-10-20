<script lang="ts">
	export let value: string;
	export let style: string = '';
</script>

<p {style} class="mt-1 text-xl text-gray-500 px-2">
	{value}
</p>
