import { SETLIST_FM_API_KEY } from '$env/static/private';

export async function load() {
	const url = new URL('https://api.setlist.fm/rest/1.0/setlist/5bb9abe0');

	const response = await fetch(url, {
		headers: { 'x-api-key': SETLIST_FM_API_KEY, accept: 'application/json' }
	});

	const data = await response.json();

	return { data };
}
