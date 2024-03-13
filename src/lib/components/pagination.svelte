<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';
	import { getPaginationItems } from './pagination';

	export let total = 0;
	export let itemsPerPage = 20;
	export let currentPage = 1;

	$: totalPages = Math.ceil(total / itemsPerPage) || 1;

	$: items = getPaginationItems({ currentPage, totalPages });

	const getHref = (item: number) => {
		const pathname = $page.url.pathname;
		const params = new URLSearchParams($page.url.searchParams);
		params.set('page', item.toString());
		return `${pathname}?${params.toString()}`;
	};
</script>

<div class="pagination">
	{#each items as item}
		{#if typeof item === 'number'}
			<a href={getHref(item)} class={clsx('pagination-item', item === currentPage && 'current')}
				>{item}</a
			>
		{:else if typeof item === 'string'}
			<span>...</span>
		{/if}
	{/each}
</div>

<style>
	.pagination {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.pagination-item {
		height: 2rem;
		width: 2rem;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--muted);
		transition: transform 0.1s;
	}

	.pagination-item:hover,
	.pagination-item:focus {
		transform: scale(1.1);
	}

	.current {
		background: var(--primary);
	}

	span {
		padding: 0 0.25rem;
	}
</style>
