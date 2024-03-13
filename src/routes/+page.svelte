<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import SetlistCard from '$lib/components/setlist-card.svelte';
	import Pagination from '$lib/components/pagination.svelte';

	export let data;

	let search = $page.url.searchParams.get('search') ?? '';
	$: paramsPage = $page.url.searchParams.get('page');
	$: currentPage = paramsPage ? Number(paramsPage) : 1;

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

		<Pagination total={data.total} {currentPage} />
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
</style>
