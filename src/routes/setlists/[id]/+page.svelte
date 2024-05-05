<script lang="ts">
	import type { Song } from '$lib/server/setlistfm/schemas/song';
	import { addSongs } from '$lib/stores/playlist-store';

	export let data;

	const {
		setlist: { sets, artist, venue, tour, eventDate }
	} = data;

	const allSongs = sets.set.reduce<Array<Song>>((acc, curr) => {
		return [...acc, ...curr.song];
	}, []);
</script>

<div>
	<h1>{artist.name} @{venue.name} setlist</h1>
	{#if tour}
		<p>Tour: {tour.name}</p>
	{/if}
	<p>Date: {eventDate}</p>

	<button on:click={() => addSongs(allSongs.map((song) => ({ ...song, artist: artist.name })))}
		>Add songs to playlist</button
	>

	<div class="setlist">
		<ol>
			{#each sets.set as set}
				{#each set.song as song (song.name)}
					<li>{song.name}</li>
				{/each}
			{/each}
		</ol>
	</div>
</div>

<style>
	div {
		text-align: center;
	}

	ol {
		list-style: decimal;
		list-style-position: inside;
	}

	.setlist {
		background: var(--muted);
	}
</style>
