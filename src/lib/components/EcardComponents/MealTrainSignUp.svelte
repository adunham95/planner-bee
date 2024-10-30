<script>
	import Calender from '../Calender/Calender.svelte';
	import BasicUser from '../Forms/BasicUser.svelte';
	let selectedDay = $state({ day: 0, month: 0, year: 0 });
</script>

<div class="px-3 sm:grid sm:grid-cols-2 gap-2 mx-auto max-w-screen-md">
	<fieldset disabled={selectedDay.day === 0}>
		<input
			hidden
			class="hidden"
			type="date"
			value="{selectedDay.year}-{(selectedDay.month + 1)
				.toString()
				.padStart(2, '0')}-{selectedDay.day.toString().padStart(2, '0')}"
		/>
		<p class="">{selectedDay.month + 1}/{selectedDay.day}/{selectedDay.year}</p>
		<BasicUser />
		<button class="btn btn-large btn-custom w-full mt-2">Add me to the train</button>
	</fieldset>
	<Calender
		disableSelectedDays
		onSelectedDay={(day, month, year) => (selectedDay = { day, month, year })}
		selectedDays={[
			{ month: 0, day: 10, year: 2024 },
			{ month: 0, day: 1, year: 2024 },
			{ month: 1, day: 8, year: 2024 }
		]}
	/>
	<div class="col-span-2">
		<h3 class="font-bold">Current Sign Ups</h3>

		<ol class="mt-2 divide-y divide-gray-100 text-sm leading-6">
			<li class="relative flex items-center space-x-6 pb-1 xl:static">
				<h3 class="pr-10 font-semibold text-gray-900 xl:pr-0">Leslie Alexander</h3>
				<div class="flex items-start space-x-3">
					<dt class="mt-0.5">
						<span class="sr-only">Date</span>
						<svg
							class="h-5 w-5 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
								clip-rule="evenodd"
							/>
						</svg>
					</dt>
					<dd><time datetime="2022-01-10T17:00">January 10th, 2022</time></dd>
				</div>
			</li>

			<!-- More meetings... -->
		</ol>
	</div>
</div>
