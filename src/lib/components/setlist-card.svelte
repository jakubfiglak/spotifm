<script lang="ts">
	import type { Setlist } from '$lib/server/setlistfm/schemas/setlist';
	import 'iconify-icon';

	export let setlist: Setlist;

	const [day, month, year] = setlist.eventDate.split('-');
	const eventDate = new Date(Number(year), Number(month), Number(day));

	const formatter = new Intl.DateTimeFormat('en-us', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});

	const formattedDate = formatter.format(eventDate);

	const split = formattedDate.split(' ');

	const monthStr = split[0];
	const dayStr = split[1].substring(0, split[1].length - 1);
	const yearStr = split[2];

	const flattenedTracks = setlist.sets.set.flatMap((set) => set.song);
	const slicedFlattenedTracks = flattenedTracks.slice(0, 10);
</script>

<article>
	<div class="wrapper">
		<time>
			<span>{monthStr}</span>
			<span class="day">{dayStr}</span>
			<span>{yearStr}</span>
		</time>
		<div class="content">
			<a href="/setlists/{setlist.id}">
				<h2>
					{setlist.artist.name} @ {setlist.venue.name}, {setlist.venue.city.name}, {setlist.venue
						.city.country.name}
				</h2>
			</a>

			<div class="badges">
				<div class="badge">
					<iconify-icon icon="mdi:guitar-electric" inline class="icon" />
					{setlist.artist.name}
				</div>

				{#if setlist.tour?.name}
					<div class="badge">
						<iconify-icon icon="mdi:world" inline class="icon" />
						{setlist.tour.name}
					</div>
				{/if}

				<div class="badge">
					<iconify-icon icon="mdi:location-on-outline" inline class="icon" />
					{setlist.venue.name}, {setlist.venue.city.name}, {setlist.venue.city.country.name}
				</div>
			</div>

			<div class="tracks">
				{#each slicedFlattenedTracks as track}
					<span>{track.name}</span>
				{/each}
				{#if flattenedTracks.length > slicedFlattenedTracks.length}
					<span>...</span>
				{/if}
			</div>
		</div>
	</div>
</article>

<style>
	article {
		background: var(--muted);
		padding: 1rem;
		container-type: inline-size;
		border-radius: 0.5em;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
	}

	time {
		background: var(--primary);
		color: var(--white);
		padding: 0.25rem 1rem;
		border-radius: 0.25rem;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	a {
		transition: color 0.2s;
	}

	a:hover {
		color: var(--primary);
	}

	h2 {
		font-size: 1.25rem;
	}

	.badges {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.badge {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		border: 1px solid var(--muted-foreground);
		padding: 0.125rem 0.5rem;
		border-radius: 1.5rem;
		font-size: 0.75rem;
		white-space: nowrap;
	}

	.icon {
		font-size: 1rem;
	}

	.tracks {
		color: var(--muted-foreground);
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.5rem;
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

		.wrapper {
			flex-direction: row;
		}
	}
</style>
