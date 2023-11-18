<script lang="ts">
	import { onMount } from 'svelte';
	import { gameStore } from '../store';

	$: value = 10;

	onMount(() => {});

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement

		if (target) {
			// Check if target is not null
			const size = Number(target.value.replace(/[^0-9]/g, ''));
			const words = Array.from({ length: size }, () => Array(size).fill(''));

			gameStore.update((value) => {
				return {
					...value,
					words: words
				};
			});
		}
	}
</script>

<input type="number" min="10" max="20" step="1" bind:value on:input={handleInput} />
