<script lang="ts">
	import { playlistStore } from '$lib/stores/playlist-store';
</script>

<a href="/new-playlist">
	<iconify-icon icon="mdi:playlist-music-outline" inline class="icon" />
	<div class="badge">{$playlistStore.length}</div>
</a>

<style>
	a {
		position: relative;
	}

	.icon {
		font-size: 2rem;
	}

	.badge {
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translateX(-50%);
		width: 1rem;
		height: 1rem;
		font-size: 0.75rem;
		border-radius: 50%;
		background: var(--primary);
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
