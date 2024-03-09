<script>
	import '../index.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		padding: 0 1rem;
		max-width: 70rem;
		margin: 0 auto;
	}

	@media (min-width: 36rem) {
		main {
			padding: 0 3rem;
		}
	}
</style>
