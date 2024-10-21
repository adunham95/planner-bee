<script lang="ts">
	export let value: string;
	export let style: string = '';
</script>

<p
	{style}
	class="mt-1 text-xl @screen-sm/ecard:text-[1.75rem] @screen-md/ecard:text-[2.5rem] @screen-lg/ecard:text-[3rem] @screen-ulra/ecard:text-[4rem] @screen-sm/ecard:text-center text-gray-500 px-2 pb-2"
>
	{value}
</p>
