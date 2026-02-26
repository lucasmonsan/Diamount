<script lang="ts">
	import '$lib/styles/normalize.css';
	import '$lib/styles/palette.css';
	import '$lib/styles/typography.css';
	import '$lib/styles/variables.css';

	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
