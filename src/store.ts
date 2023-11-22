import { writable, derived } from 'svelte/store';

export enum Direction {
    Vertical,
    Horizontal,
}

export type GameState = {
    words: string[][];
    blankWords: string[][];
    matchWords: boolean[][];
    wordsToFind: string[];
    foundWords: { word: string; row: number; col: number }[];
};

export type UserState = {
    currentPosition: { row: number; col: number };
    moveDirection: Direction;
};

const initialGameState: GameState = {
    words: Array.from({ length: 10 }, () => Array(10).fill('')),
    blankWords: [],
    matchWords: [],
    wordsToFind: [],
    foundWords: [],
};

const initialUserState: UserState = {
    currentPosition: { row: 0, col: 0 },
    moveDirection: Direction.Horizontal,
};

// Create writable stores
export const gameStore = writable<GameState>(initialGameState);
export const userStore = writable<UserState>(initialUserState);

export const gameSize = derived(gameStore, $gameStore => ({
    rows: $gameStore.words.length,
    cols: $gameStore.words[0] ? $gameStore.words[0].length : 0,
}));
