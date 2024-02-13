import { SETLIST_FM_API_KEY } from '$env/static/private';

export async function load({ url }) {
	const search = url.searchParams.get('search');

	if (!search) {
		return { setlists: [] };
	}

	const setlistFmUrl = new URL('https://api.setlist.fm/rest/1.0/search/setlists');

	setlistFmUrl.searchParams.append('artistName', search);

	const response = await fetch(setlistFmUrl, {
		headers: { 'x-api-key': SETLIST_FM_API_KEY, accept: 'application/json' }
	});

	const data = await response.json();

	return { setlists: data };
}
