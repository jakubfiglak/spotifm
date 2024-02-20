import { SETLIST_FM_API_KEY } from '$env/static/private';
import { setlistSchema } from './schemas/setlist';
import { setlistsResponseSchema } from './schemas/response';

const BASE_URL = new URL('https://api.setlist.fm/rest/1.0');

const headers = { 'x-api-key': SETLIST_FM_API_KEY, accept: 'application/json' };

type GetSetlistArgs = {
	artistName: string;
	page?: number;
};

export async function getSetlists({ artistName, page = 1 }: GetSetlistArgs) {
	const url = new URL(`${BASE_URL}/search/setlists`);
	url.searchParams.append('artistName', artistName);
	url.searchParams.append('p', page.toString());

	const response = await fetch(url, { headers });

	if (response.ok) {
		const data = await response.json();
		return setlistsResponseSchema.parse(data);
	}

	console.error(JSON.stringify(response, null, 2));

	return null;
}

export async function getSetlistById(id: string) {
	const response = await fetch(`${BASE_URL}/setlist/${id}`, { headers });

	if (response.ok) {
		const data = await response.json();
		return setlistSchema.parse(data);
	}

	return null;
}
