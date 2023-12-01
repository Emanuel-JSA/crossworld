<script lang="ts">
	import { gameStore } from '../store';

	let value: string;
	let wordsToFind: string[] = [];

	function handleClick() {
		wordsToFind = [...wordsToFind, value];
		value = '';
        
		gameUpdate(wordsToFind);
	}

	function handleDeleteWord(word: string) {
		wordsToFind = wordsToFind.filter((w) => w != word);

		gameUpdate(wordsToFind);
	}

	function gameUpdate(wordsToFind: string[]) {
		gameStore.update((value) => {
			return {
				...value,
				wordsToFind: wordsToFind
			};
		});
	}
</script>

<input bind:value />
<button on:click={handleClick}>+</button>

{#if wordsToFind.length > 0}
	{#each wordsToFind as word}
		<p>{word}</p>
		<button on:click={() => handleDeleteWord(word)}>x</button>
	{/each}
{/if}
