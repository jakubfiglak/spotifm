import { SETLIST_FM_API_KEY } from '$env/static/private';

const BASE_URL = new URL('https://api.setlist.fm/rest/1.0');
import { setlistsResponseSchema } from './schemas/response';

export async function getSetlists(search: string) {
	const setlistFmUrl = new URL(`${BASE_URL}/search/setlists`);
	setlistFmUrl.searchParams.append('artistName', search);

	const response = await fetch(setlistFmUrl, {
		headers: { 'x-api-key': SETLIST_FM_API_KEY, accept: 'application/json' }
	});

	if (response.ok) {
		const data = await response.json();
		return setlistsResponseSchema.parse(data);
		// return data;
	}

	return null;
}
