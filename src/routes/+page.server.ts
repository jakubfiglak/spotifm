import { getSetlists } from '$lib/server/setlistfm';

export async function load({ url }) {
	const search = url.searchParams.get('search');

	if (!search) {
		return {};
	}

	const data = await getSetlists(search);

	return { ...data };
}
