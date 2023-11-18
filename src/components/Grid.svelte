<script lang="ts">
	import Cell from './Cell.svelte';
	import { userStore, gameStore, Direction } from '../store';
	import type { GameState } from '../store';
	export let rows: number;
	export let cols: number;

	$: checkFocus =  function(row: number, col: number) {
		if ($userStore.moveDirection == Direction.Horizontal) {
			return $userStore.currentPosition.row == row;
		} else {
			return $userStore.currentPosition.col == col;
		}
	}
	
	function handleCellInput(event: CustomEvent) {
		let value = event.detail.value;
		let rowPosition = event.detail.rowPosition;
		let colPosition = event.detail.colPosition;
		
		updateGameStore(rowPosition, colPosition, value);
	}

	function updateGameStore(rowPosition: number, colPosition: number, value: string) {
		const words = $gameStore.blankWords.map(row => [...row]);
		words[rowPosition][colPosition] = value;
		gameStore.update((value) => {
			return {
				...value,
				words: words
			};
		});
	}

</script>

<div class="grid">
	{#each Array(rows) as _, row}
		<div class="row">
			{#each Array(cols) as _, col}
				<Cell 
					rowPosition={row} 
					colPosition={col} 
					isOnFocus={checkFocus(row, col)} 
					on:input={handleCellInput}
					/>
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
