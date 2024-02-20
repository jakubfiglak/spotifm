<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import SetlistCard from '$lib/components/setlist-card.svelte';
	import clsx from 'clsx';

	export let data;

	const totalPages =
		data.total && data.itemsPerPage ? Math.ceil(data.total / data.itemsPerPage) : 0;

	let search = $page.url.searchParams.get('search') ?? '';
	$: currentPage = $page.url.searchParams.get('page') ?? '1';

	function getPaginationItemHref(pageIdx: number) {
		const pageNumber = (pageIdx + 1).toString();
		const searchParams = $page.url.searchParams;

		searchParams.set('page', pageNumber);

		return `/?${searchParams.toString()}`;
	}

	async function handleSubmit() {
		const params = new URLSearchParams();

		params.append('search', search);

		await goto(`?${params.toString()}`, { keepFocus: true });
	}
</script>

<div>
	<h1>Welcome to <span>SpotiFM</span></h1>
	<form on:submit|preventDefault={handleSubmit}>
		<input name="search" placeholder="Search term..." bind:value={search} />
		<input type="submit" value="Search" />
	</form>
	{#if data.setlist}
		<ul>
			{#each data.setlist as setlist}
				<li>
					<SetlistCard {setlist} />
				</li>
			{/each}
		</ul>

		<div class="pagination">
			{#each Array.from(Array(totalPages)).keys() as idx}
				<a
					href={getPaginationItemHref(idx)}
					class={clsx('pagination-item', (idx + 1).toString() === currentPage && 'current-page')}
					>{idx + 1}</a
				>
			{/each}
		</div>
	{/if}
</div>

<style>
	h1 {
		text-align: center;
	}

	h1 span {
		color: var(--primary);
	}

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	input {
		border-radius: 0.5rem;
		border: 1px solid var(--input);
		padding: 0.25rem 0.75rem;
		width: 16rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	li {
		list-style: none;
	}

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

	.current-page {
		background: var(--primary);
	}
</style>
