<script>
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Containers/container.svelte';
	import Label from '$lib/components/Inputs/Label.svelte';
	import TextArea from '$lib/components/Inputs/TextArea.svelte';
	import TextInput from '$lib/components/Inputs/TextInput.svelte';
	import TextInputList from '$lib/components/Inputs/TextInputList.svelte';
</script>

<Container class="py-4">
	<h1>New eCard Component</h1>
	<form method="POST" use:enhance class="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pt-4">
		<TextInput label="Title" id="title" showLabel />
		<TextInput label="Key" id="key" showLabel />
		<TextArea label="Description" id="description" showLabel class="col-span-2" />
		<div class="col-span-2">
			<Label label="Options" id="options" showLabel />
			<TextInputList inputType="text" groupName="option" />
		</div>
		<div class="flex justify-end">
			<button type="submit">Save</button>
		</div>
	</form>
</Container>
