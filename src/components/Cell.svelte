<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import GameDirection from '../utils/gameDirection';
	const dispatch = createEventDispatcher();

	export let isBlack: boolean = false;
	export let isBlocked: boolean = false;
	export let isOnFocus: boolean = false;
	export let rowPosition: number;
	export let colPosition: number;
	export let value = '';

	let id = `cell-${rowPosition}-${colPosition}`;

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement

		if (target) {
			// Check if target is not null
			value = target.value.replace(/[^A-Za-z]/g, '');
			GameDirection.nextPosition();
			dispatch('input', { value: value, rowPosition: rowPosition, colPosition: colPosition });
		}
	}

	function handleClick(event: Event) {
		GameDirection.updateCurrentPosition(rowPosition, colPosition);
		GameDirection.changeDirection();
	}
</script>

<div class="cell" class:is-black={isBlack}>
	{#if !isBlack}
		<input
			{id}
			type="text"
			bind:value
			maxlength="1"
			on:input={handleInput}
			on:click={handleClick}
			class:is-blocked={isBlocked}
			class:is-on-focus={isOnFocus}
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
		background-color: blue;
	}

	.is-on-focus {
		background-color: yellow;
	}

	input {
		width: 100%;
		height: 100%;
		font-size: 20px;
		text-align: center;
		border: none;
		background-color: transparent;
		text-transform: uppercase;
	}
</style>
