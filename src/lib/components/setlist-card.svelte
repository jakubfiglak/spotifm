<script lang="ts">
	import type { Setlist } from '$lib/server/setlistfm/schemas/setlist';
	import 'iconify-icon';
	import Badge from '$lib/components/badge.svelte';
	import EventDateTile from '$lib/components/event-date-tile.svelte';

	export let setlist: Setlist;

	$: venue = `${setlist.venue.name}, ${setlist.venue.city.name}, ${setlist.venue.city.country.name}`;
	$: songs = setlist.sets.set.flatMap((set) => set.song);
	$: firstTenSongs = songs.slice(0, 10);
</script>

<article>
	<div class="wrapper">
		<EventDateTile date={setlist.eventDate} />
		<div class="content">
			<a href="/setlists/{setlist.id}">
				<h2>
					{setlist.artist.name} @ {venue}
				</h2>
			</a>

			<div class="badges">
				<Badge>
					<iconify-icon icon="mdi:guitar-electric" inline class="icon" />
					{setlist.artist.name}
				</Badge>

				{#if setlist.tour?.name}
					<Badge>
						<iconify-icon icon="mdi:world" inline class="icon" />
						{setlist.tour.name}
					</Badge>
				{/if}

				<Badge>
					<iconify-icon icon="mdi:location-on-outline" inline class="icon" />
					{venue}
				</Badge>
			</div>

			<div class="tracks">
				{#each firstTenSongs as track}
					<span>{track.name}</span>
				{/each}
				{#if songs.length > firstTenSongs.length}
					<span>...</span>
				{/if}
			</div>
		</div>

		<iconify-icon icon="heroicons-solid:music-note" class="note" />
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
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
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

	.icon {
		font-size: 1rem;
	}

	.tracks {
		color: var(--muted-foreground);
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.5rem;
	}

	.note {
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 5rem;
		color: var(--muted-foreground);
		opacity: 0.1;
		z-index: -2;
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
