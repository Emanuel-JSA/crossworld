<script lang="ts">
	import { checkWord } from '../utils/wordCheck';
	import type { GameState } from '../store';
	import { gameStore } from '../store';
	import Cell from './Cell.svelte';

	let rows: number;
	let cols: number;

	// Accessing store values
	let state: GameState;
	gameStore.subscribe((value: GameState) => {
		state = value;
		rows = state.words.length;
		cols = state.words[0].length;
	});

	function isBlackCell(row: number, col: number) {
		if (state.words[row][col] === '') {
			return true;
		}
	}

	function handleCellInput(event: CustomEvent) {
		let value = event.detail.value;
		let rowPosition = event.detail.rowPosition;
		let colPosition = event.detail.colPosition;
		let found: boolean = false;

		updateBlankWords(rowPosition, colPosition, value);

		state.wordsToFind.forEach((word) => {
			found = checkWord(state.blankWords, word);
		});
	}

	
	function updateBlankWords(rowPosition: number, colPosition: number, value: string) {
		state.blankWords[rowPosition][colPosition] = value;
	}

	// function checkWin() {
	// 	for (let i = 0; i < rows; i++) {
	// 		for (let j = 0; j < cols; j++) {
	// 			if (words[i][j] !== blankWords[i][j]) {
	//                 return;
	// 			}
	// 		}
	// 	}

	//     console.log('You win!');
	// }
</script>

<div class="grid">
	{#each Array(rows) as _, row}
		<div class="row">
			{#each Array(cols) as _, col}
				{#if isBlackCell(row, col)}
					<Cell isBlack={true} rowPosition={row} colPosition={col} />
				{:else if $gameStore.matchWords[row][col]}
					<Cell
						isBlocked={true}
						value={state.words[row][col]}
						rowPosition={row}
						colPosition={col}
					/>
				{:else}
					<Cell on:input={handleCellInput} rowPosition={row} colPosition={col} />
				{/if}
			{/each}
		</div>
	{/each}
</div>

<style>
	.grid {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.row {
		display: flex;
	}
</style>
