<script lang="ts">
	import GameGrid from '../components/GameGrid.svelte';
	import { gameStore } from '../store';

	let words: string[][] = [
		['H', 'E', 'L', 'L', 'O', '', '', '', '', ''],
		['E', '', '', '', '', '', '', '', '', ''],
		['L', '', '', '', '', '', '', '', '', ''],
		['P', 'L', 'E', 'A', 'S', 'E', '', '', '', ''],
		['', 'I', '', '', 'P', '', '', '', '', ''],
		['', 'M', '', '', 'A', '', '', '', '', ''],
		['', 'E', '', '', 'C', '', '', '', '', ''],
		['', '', '', '', 'E', 'N', 'D', '', '', ''],
		['', '', '', '', '', '', '', '', '', ''],
		['B', 'A', 'N', 'A', 'N', 'A', '', '', '', '']
	];
	let wordsToFind: string[] = ['HELLO', 'PLEASE', 'BANANA', 'END', 'LIME', 'SPACE', 'HELP'];
	let blankWords: string[][] = Array(words.length).fill(Array(words[0].length).fill(''));
	let matchWords: boolean[][] = Array(words.length).fill(Array(words[0].length).fill(false));

	gameStore.update((value) => {
		return {
			...value,
			words: words,
			wordsToFind: wordsToFind,
			blankWords: blankWords,
			matchWords: matchWords,
		};
	});
</script>

<h1>Crossworld</h1>

<GameGrid />
