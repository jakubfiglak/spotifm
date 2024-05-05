<script lang="ts">
	import { playlistStore } from '$lib/stores/playlist-store';
</script>

<div>
	<div class="setlist">
		<ol>
			{#each $playlistStore as song}
				<li>{song.name}</li>
			{/each}
		</ol>
	</div>
</div>
