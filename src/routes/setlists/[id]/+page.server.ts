import { getSetlistById } from '$lib/server/setlistfm';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const setlist = await getSetlistById(params.id);

	if (!setlist) {
		error(404, 'Setlist not found');
	}

	return { setlist };
}
