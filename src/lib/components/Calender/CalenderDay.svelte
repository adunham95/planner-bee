<script lang="ts">
	interface IDay {
		day: number;
		year: number;
		month: number;
	}

	interface Props {
		thisDay: IDay;
		currentMonth: number;
		selectedDay?: boolean;
	}

	const { thisDay, currentMonth, selectedDay = false }: Props = $props();

	function getStyle() {
		if (thisDay.month === currentMonth) {
			return 'bg-white text-gray-500 has-[:checked]:bg-custom-200 has-[:checked]:text-custom-600 has-[:checked]:font-semibold hover:bg-custom-100';
		}
		return 'bg-gray-50 text-gray-400 hover:bg-gray-100 has-[:checked]:bg-custom-100 has-[:checked]:text-custom-500 has-[:checked]:font-semibold';
	}
</script>

<label
	class={` py-1.5 focus:z-10 has-[:checked]:bg-custom-200 has-[:checked]:text-custom-600 has-[:checked]:font-semibold ${getStyle()}`}
>
	<input
		hidden
		onchange={() => console.log({ thisDay })}
		type="radio"
		name="calender"
		class="hidden"
	/>
	<time
		datetime={`${thisDay.year}-${thisDay.month}-${thisDay.day}`}
		class={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${selectedDay && 'rounded-full bg-custom-500 text-white'}`}
		>{thisDay.day}</time
	>
</label>
