<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';

	export let total = 0;
	export let itemsPerPage = 20;
	export let currentPage = 1;

	$: totalPages = Math.ceil(total / itemsPerPage) || 1;

	$: getHref = (idx: number) => {
		const pathname = $page.url.pathname;
		const params = $page.url.searchParams;
		params.set('page', (idx + 1).toString());
		return `${pathname}?${params.toString()}`;
	};
</script>

<div class="pagination">
	{#each Array(totalPages) as _, idx}
		<a href={getHref(idx)} class={clsx('pagination-item', idx + 1 === currentPage && 'current')}
			>{idx + 1}</a
		>
	{/each}
</div>

<style>
	.pagination {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.pagination-item {
		height: 2rem;
		width: 2rem;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--muted);
	}

	.current {
		background: var(--primary);
	}
</style>
