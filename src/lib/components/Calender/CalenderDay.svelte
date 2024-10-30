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
		disableIfSelected?: boolean;
		disabled?: boolean;
		onDayClick?: (day: number, month: number, year: number) => void;
	}

	const today = {
		day: new Date().getDay(),
		month: new Date().getMonth(),
		year: new Date().getFullYear()
	};

	const {
		thisDay,
		currentMonth,
		disabled = false,
		selectedDay = false,
		disableIfSelected = false,
		onDayClick = () => {}
	}: Props = $props();

	function isToday() {
		if (thisDay.year !== today.year) return false;
		if (thisDay.month !== today.month) return false;
		if (thisDay.day !== today.day) return false;
		return true;
	}

	function getStyle() {
		if (thisDay.month === currentMonth) {
			return 'bg-white text-gray-500 has-[:checked]:bg-custom-200 has-[:checked]:text-custom-600 has-[:checked]:font-semibold hover:bg-custom-100';
		}
		return 'bg-gray-50 text-gray-400 hover:bg-gray-100 has-[:checked]:bg-custom-100 has-[:checked]:text-custom-500 has-[:checked]:font-semibold';
	}
</script>

<label
	class={` py-1.5 focus:z-10 has-[:checked]:bg-custom-200 has-[:checked]:text-custom-600 has-[:checked]:font-semibold has-[:disabled]:bg-gray-200 ${getStyle()}`}
>
	<input
		hidden
		onchange={() => onDayClick(thisDay.day, thisDay.month, thisDay.year)}
		type="radio"
		name="calender"
		class="hidden"
		disabled={disabled || (disableIfSelected && selectedDay)}
	/>
	<time
		datetime={`${thisDay.year}-${thisDay.month}-${thisDay.day}`}
		class={`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${isToday() && 'rounded-full text-custom-600 font-semibold'} ${selectedDay && 'rounded-full bg-custom-500 text-white'}`}
		>{thisDay.day}</time
	>
</label>
