<script>
	export let data;

	const {
		setlist: { sets, artist, venue, tour, eventDate }
	} = data;

	console.log(sets);
</script>

<div>
	<h1>{artist.name} @{venue.name} setlist</h1>
	{#if tour}
		<p>Tour: {tour.name}</p>
	{/if}
	<p>Date: {eventDate}</p>

	<div class="setlist">
		<ol>
			{#each sets.set as set}
				{#each set.song as song}
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
