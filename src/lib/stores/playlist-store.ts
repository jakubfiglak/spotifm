import type { Song } from '$lib/server/setlistfm/schemas/song';
import { writable } from 'svelte/store';

export const playlistStore = writable<Array<Song>>([]);

export function addSongs(songs: Array<Song>) {
	return playlistStore.update((playlist) => [...playlist, ...songs]);
}

export function reset() {
	return playlistStore.set([]);
}
