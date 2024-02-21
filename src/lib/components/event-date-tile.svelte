<script lang="ts">
	/** @param {string} date - date of the concert in the format "dd-MM-yyyy" */
	export let date: string;

	$: dateObj = new Date(date.split('-').reverse().join('-'));

	const formatter = new Intl.DateTimeFormat('en-us', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});

	$: formattedDate = formatter.format(dateObj);

	$: [month, day, year] = formattedDate.split(' ');
</script>

<time>
	<span>{month}</span>
	<span class="day">{day.substring(0, day.length - 1)}</span>
	<span>{year}</span>
</time>

<style>
	time {
		background: var(--primary);
		color: var(--white);
		padding: 0.25rem 1rem;
		border-radius: 0.25rem;
	}

	@container (min-width: 36rem) {
		time {
			display: inline-flex;
			flex-direction: column;
			align-items: center;
		}

		.day {
			font-size: 2rem;
			font-weight: 700;
			line-height: 1;
		}
	}
</style>
