<script>
	import BasicUser from '../Forms/BasicUser.svelte';
	import Toggle from '../Inputs/Toggle.svelte';
</script>

<div class="p-6">
	<form class="max-w-xl mx-auto">
		<BasicUser />
		<Toggle id="going" label="Going" class="py-2 w-auto" checked />
		<button class="btn btn-large w-full btn-custom">RSVP</button>
	</form>
</div>
