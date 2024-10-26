<script lang="ts">
	import PromoSlot from './EcardComponents/PromoSlot.svelte';
	import Rsvp from './EcardComponents/RSVP.svelte';
	import Signature from './EcardComponents/Signature.svelte';
	import EcardDisplayComponent from './EcardDisplayComponent.svelte';

	export let style = '';
	export let components: {
		id: string;
		ecardComponentID: string;
		style?: string;
		value: string;
	}[] = [];

	export let signatures: { name: string; message: string }[] = [];

	console.log('eCard', { components });
</script>

<div
	{style}
	class="w-full ecard rounded border border-solid border-gray-200 bg-custom-100 @container/ecard"
>
	{#each components as component}
		<EcardDisplayComponent {...component} />
	{/each}

	<Rsvp />

	<Signature
		signatures={[
			{
				name: 'Birthday',
				message:
					'Happy Birthday! 🎉 May your day be filled with joy, laughter, and amazing memories!'
			},
			{
				name: 'Anniversary',
				message: 'Happy Anniversary! 🥂 Wishing you many more years of love and happiness together.'
			},
			{
				name: 'Congratulations',
				message:
					'Congratulations on your big achievement! 🌟 You deserve all the success in the world!'
			},
			{
				name: 'Get Well Soon',
				message: 'Thinking of you and hoping you feel better soon. 💐 Take care and rest up!'
			},
			{
				name: 'Thank You',
				message: 'Thank you so much for everything! 🌹 Your kindness means the world to me.'
			},
			{
				name: 'Sympathy',
				message: 'Thinking of you in this difficult time. 💔 May you find peace and comfort.'
			},
			{
				name: 'New Baby',
				message:
					'Congratulations on your little bundle of joy! 👶 Wishing your family lots of love and laughter.'
			},
			{
				name: 'Graduation',
				message: 'Congrats, Grad! 🎓 This is just the beginning of your amazing journey!'
			},
			{
				name: 'Retirement',
				message:
					'Happy Retirement! 🎉 May this next chapter be filled with joy, relaxation, and adventure!'
			},
			{
				name: 'Good Luck',
				message: 'Wishing you all the luck and success you deserve! 🍀 Go out there and shine!'
			}
		]}
	/>

	<PromoSlot />
</div>
