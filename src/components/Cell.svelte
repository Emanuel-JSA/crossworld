<script lang="ts">
    export let letter: string | undefined;
    export let isBlack: boolean = false;
</script>

<div class="cell" class:is-black={isBlack}>
    {#if !isBlack}
        <input type="text" value={letter} />
    {/if}
</div>

<style>
    .cell {
        width: 30px;
        height: 30px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .is-black {
        background-color: black;
    }

    input {
        width: 100%;
        height: 100%;
        font-size: 20px;
        text-align: center;
        border: none;
        background-color: transparent;
    }
</style>