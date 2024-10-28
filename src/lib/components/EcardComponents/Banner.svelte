<script lang="ts">
	interface Props {
		img?: string;
		style?: string;
	}

	let { img = '', style = '' }: Props = $props();
</script>

<img
	src={img}
	alt="Custom Banner"
	{style}
	class=" inset-0 -z-10 w-full aspect-sqare object-cover object-right @screen-sm/ecard:object-center @screen-sm/ecard:h-[8rem] ecard:aspect-square @screen-md/ecard:h-[12rem] @screen-lg/ecard:-[15rem] @screen-ulra/ecard:h-[20rem] @screen-sm/ecard:text-center"
/>
