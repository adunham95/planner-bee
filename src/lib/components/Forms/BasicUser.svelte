<script>
	import TextInput from '../Inputs/TextInput.svelte';

	export const firstNameLabel = 'First Name';
	export const firstNameId = 'firstName';
	export const firstNameValue = '';

	export const lastNameLabel = 'Last Name';
	export const lastNameId = 'lastName';
	export const lastNameValue = '';

	export const emailLabel = 'Email';
	export const emailId = 'email';
	export const emailValue = '';
</script>

<div class="grid grid-cols-2 gap-2 pt-2">
	<TextInput id={firstNameId} label={firstNameLabel} value={firstNameValue} showLabel />
	<TextInput id={lastNameId} label={lastNameLabel} value={lastNameValue} showLabel />
	<TextInput id={emailId} label={emailLabel} value={emailValue} showLabel class="col-span-2" />
</div>
