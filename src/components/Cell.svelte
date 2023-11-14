<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let isBlack: boolean = false;
	export let isBlocked: boolean = false;
	export let rowPosition: number;
	export let colPosition: number;
	export let value = '';

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement
		if (target) {
			// Check if target is not null
			value = target.value;
			dispatch('input', { value: value, rowPosition: rowPosition, colPosition: colPosition });
		}
	}
</script>

<div class="cell" class:is-black={isBlack}>
	{#if !isBlack}
		<input
			type="text"
			bind:value
			maxlength="1"
			on:input={handleInput}
			class:is-blocked={isBlocked}
            disabled={isBlocked}
		/>
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

	.is-blocked {
		background-color: orange;
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
