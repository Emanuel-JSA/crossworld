import { get } from 'svelte/store';
import { userStore, Direction } from '../store';
import GameSize from './gameSize';

const GameDirection = {
	updateCurrentPosition(row: number, col: number) {
		const userState = get(userStore);
		userStore.set({
			...userState,
			currentPosition: {
				row,
				col
			}
		});
	},

	changeDirection() {
		const userState = get(userStore);

		if (userState.moveDirection === Direction.Horizontal) {
			userStore.set({
				...userState,
				moveDirection: Direction.Vertical
			});
		} else {
			userStore.set({
				...userState,
				moveDirection: Direction.Horizontal
			});
		}
	},

	nextPosition() {
		const userState = get(userStore);
		const { currentPosition, moveDirection } = userState;
		const size = GameSize.getSize();

		let nextRow = currentPosition.row;
		let nextCol = currentPosition.col;

		if (moveDirection === Direction.Horizontal) {
			nextCol = nextCol + 1;
		} else {
			nextRow = nextRow + 1;
		}

		if (nextCol > size.cols - 1) {
		    nextCol = 0;
		} else if (nextRow > size.rows - 1) {
		    nextRow = 0;
		}

		const nextCell = document.getElementById(`cell-${nextRow}-${nextCol}`);

		if (nextCell) {
			nextCell.focus();
            this.updateCurrentPosition(nextRow, nextCol);
		}
	},
};

export default GameDirection;
