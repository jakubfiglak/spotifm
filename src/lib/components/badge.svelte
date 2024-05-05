<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { clsx } from 'clsx';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={clsx('badge', className)} {...$$restProps}>
	<slot />
</div>

<style>
	.badge {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		border: 1px solid var(--muted-foreground);
		padding: 0.125rem 0.5rem;
		border-radius: 2em;
		font-size: 0.75rem;
		white-space: nowrap;
	}
</style>
