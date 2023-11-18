<script lang="ts">
	import Grid from '../../components/Grid.svelte';
	import GridSizeSelect from '../../components/GridSizeSelect.svelte';
	import { gameStore } from '../../store';
</script>

<h1>ADM</h1>

<GridSizeSelect />
<Grid rows={$gameStore.words.length} cols={$gameStore.words[0].length} />
