import type { Song } from '$lib/server/setlistfm/schemas/song';
import { writable } from 'svelte/store';

type SongWithArtist = Song & { artist: string };

export const playlistStore = writable<Array<SongWithArtist>>([]);

export function addSongs(songs: Array<SongWithArtist>) {
	return playlistStore.update((playlist) => [...playlist, ...songs]);
}

export function reset() {
	return playlistStore.set([]);
}
