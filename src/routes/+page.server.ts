import { getSetlists } from '$lib/server/setlistfm';

export async function load({ url }) {
	const search = url.searchParams.get('search');
	const page = url.searchParams.get('page');

	if (!search) {
		return {};
	}

	const data = await getSetlists({ artistName: search, page: page ? Number(page) : undefined });

	return { ...data };
}
