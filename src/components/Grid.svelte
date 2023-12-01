<script lang="ts">
	import Cell from './Cell.svelte';
	import { userStore, gameStore, Direction } from '../store';
	export let rows: number;
	export let cols: number;

	$: checkFocus = function (row: number, col: number) {
		if ($userStore.moveDirection == Direction.Horizontal) {
			return $userStore.currentPosition.row == row;
		} else {
			return $userStore.currentPosition.col == col;
		}
	};

	function handleCellInput(event: CustomEvent, row: number, col: number) {
		if (event.detail.value == undefined) {
			eraseValue(row, col);
			return;
		}
	
		const value = event.detail.value.replace(/[^A-Za-z]/g, '').toUpperCase();

		if (value.length > 1 || value == '' || value == null) return;

		updateGameStore(row, col, value);
	}

	function updateGameStore(row: number, col: number, value: string) {
		const words = $gameStore.words;
		// allow only letters
		words[row][col] = value;
		gameStore.update((value) => {
			return {
				...value,
				words: words
			};
		});
	}

	function eraseValue(row: number, col: number) {
		const words = $gameStore.words;
		words[row][col] = '';
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
					on:input={(event) => handleCellInput(event, row, col)}
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
