<script>
	import Nav from '$lib/components/nav.svelte';
	import '../index.css';
</script>

<main>
	<Nav />
	<div class="app-wrapper">
		<slot />
	</div>
</main>

<style>
	.app-wrapper {
		padding: 1rem 1rem;
		max-width: 70rem;
		margin: var(--nav-height) auto;
	}

	@media (min-width: 36rem) {
		.app-wrapper {
			padding: 1rem 3rem;
		}
	}
</style>
