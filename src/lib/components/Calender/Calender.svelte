<script lang="ts">
	import {
		buildMonthArray,
		generateCalendarCellsWithAdjacentDays
	} from '$lib/utils/generateCalender';
	import CalenderDay from './CalenderDay.svelte';

	interface Props {
		selectedDays?: { month: number; day: number; year: number }[];
	}

	const { selectedDays = [] }: Props = $props();

	let currentMonth = $state(0);
	let currentYear = $state(2024);

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const dayArray = $derived(generateCalendarCellsWithAdjacentDays(currentMonth, currentYear));

	$inspect(dayArray);

	function goToMonth(type: 'up' | 'down') {
		if (type === 'down') {
			if (currentMonth === 0) {
				currentYear -= 1;
				currentMonth = 11;
			} else {
				currentMonth -= 1;
			}
		}
		if (type === 'up') {
			if (currentMonth === 11) {
				currentYear += 1;
				currentMonth = 0;
			} else {
				currentMonth += 1;
			}
		}
	}
</script>

<div>
	<div class="text-center">
		<div class="flex items-center text-gray-900">
			<button
				type="button"
				onclick={() => goToMonth('down')}
				class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
			>
				<span class="sr-only">Previous month</span>
				<svg
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<div class="flex-auto text-sm font-semibold">{months[currentMonth]} {currentYear}</div>
			<button
				type="button"
				onclick={() => goToMonth('up')}
				class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
			>
				<span class="sr-only">Next month</span>
				<svg
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
					data-slot="icon"
				>
					<path
						fill-rule="evenodd"
						d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>
	</div>

	<div class="mt-10 text-center">
		<div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
			<div>S</div>
			<div>M</div>
			<div>T</div>
			<div>W</div>
			<div>T</div>
			<div>F</div>
			<div>S</div>
		</div>

		<div
			class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200"
		>
			{#each dayArray as days}
				<CalenderDay
					thisDay={days}
					{currentMonth}
					selectedDay={selectedDays.some((d) => {
						if (d.day !== days.day) return false;
						if (d.month !== days.month) return false;
						if (d.year !== days.year) return false;
						return true;
					})}
				/>
			{/each}
		</div>
	</div>
</div>
