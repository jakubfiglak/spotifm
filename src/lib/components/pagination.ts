import { createRange } from '$lib/utils';

type GetPaginationItemsArgs = {
	totalPages: number;
	currentPage: number;
	/** how many digits to display adjacent to the start and end page number */
	boundaryCount?: number;
	/** how many digits to display either side of current page */
	siblingCount?: number;
};

export function getPaginationItems({
	totalPages,
	currentPage,
	boundaryCount = 0,
	siblingCount = 1
}: GetPaginationItemsArgs) {
	const allPages = createRange(1, totalPages);

	const includedPages = allPages.filter((page) => {
		return (
			// First page
			page === 1 ||
			// Last page
			page === totalPages ||
			// Current page
			page === currentPage ||
			// Pages after the first page based on boundaryCount
			page <= 1 + boundaryCount ||
			// Pages before the last page based on boundaryCount
			page >= totalPages - boundaryCount ||
			// Pages after the current page based on siblingCount
			(page >= currentPage - siblingCount && page <= currentPage + siblingCount)
		);
	});

	const items: Array<string | number> = [];

	includedPages.forEach((page, idx) => {
		items.push(page);

		const nextPage = includedPages[idx + 1];
		if (typeof nextPage !== 'undefined' && nextPage !== page + 1) {
			items.push('...');
		}
	});

	return items;
}
