import { get } from 'svelte/store';
import { gameStore } from '../store';

const GameSize = {
	getSize() {
		const { words } = get(gameStore);
		return {
			rows: words.length,
			cols: words[0].length
		};
	}
};

export default GameSize;
