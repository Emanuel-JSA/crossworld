<script lang="ts">
	import Grid from '../../components/Grid.svelte';
	import GridSizeSelect from '../../components/GridSizeSelect.svelte';
	import { gameStore, gameSize } from '../../store';
	import GameServices from '../../services/GameServices';
	import WordsToFind from '../../components/WordsToFind.svelte';
	import { errorStore } from '../../store';

	let error = '';

	function SubtmitGame() {
		GameServices.submitGame($gameStore).catch((error) => {
			errorStore.set(error.message);
		});
	}
</script>

<h1>ADM</h1>

<GridSizeSelect />
<Grid rows={$gameSize.rows} cols={$gameSize.cols} />
<button on:click={SubtmitGame}>submit game</button>
<WordsToFind />