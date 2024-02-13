<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data;

	let search = $page.url.searchParams.get('search') ?? '';

	async function handleSubmit() {
		const params = new URLSearchParams();

		params.append('search', search);

		await goto(`?${params.toString()}`, { keepFocus: true });
	}
</script>

<div class="container">
	<h1>Welcome to <span>SpotiFM</span></h1>
	<form on:submit|preventDefault={handleSubmit}>
		<input name="search" placeholder="Search term..." bind:value={search} />
		<input type="submit" value="Search" />
	</form>

	<pre>{JSON.stringify(data, null, 2)}</pre>
</div>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5rem;
		gap: 1rem;
	}

	h1 span {
		color: var(--primary);
	}

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	input {
		border-radius: 0.5rem;
		border: 1px solid var(--input);
		padding: 0.25rem 0.75rem;
		width: 16rem;
	}
</style>
