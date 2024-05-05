<script>
	import PlaylistBadge from './playlist-badge.svelte';
</script>

<nav>
	<div class="content">
		<a href="/">
			<div class="logo">SpotiFm</div>
		</a>
		<PlaylistBadge />
	</div>
</nav>

<style>
	nav {
		background: var(--muted);
		position: fixed;
		width: 100%;
		height: var(--nav-height);
		z-index: 10;
		top: 0;
		left: 0;
		padding: 0 1rem;
	}

	.content {
		max-width: 70rem;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		color: var(--primary);
		font-size: 1.5rem;
		font-weight: bold;
	}

	@media (min-width: 36rem) {
		nav {
			padding: 0 3rem;
		}
	}
</style>
