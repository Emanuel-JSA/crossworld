<script lang="ts">
    import Cell from './Cell.svelte';

    export let rows:number;
    export let cols:number;
    export let words:string[][];

    function isBlackCell(row: number, col: number) {
        if (words[row][col] === '') {
            return true;
        }
    }

    function getLetter(row, col) {
        return words[row][col];
    }
</script>

<div class="grid">
    {#each Array(rows) as _, row}
        <div class="row">
            {#each Array(cols) as _, col}
                {#if isBlackCell(row, col)}
                    <Cell isBlack={true} />
                {:else}
                    <Cell letter={getLetter(row, col)} />
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
