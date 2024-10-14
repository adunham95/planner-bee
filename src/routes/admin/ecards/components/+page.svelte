<script>
	export let data;
	console.log(data);
</script>

<ul>
	{#each data.cardComponents as components}
		<li><a href="/admin/ecards/components/{components.id}">{components.title}</a>"</li>
	{/each}
</ul>
