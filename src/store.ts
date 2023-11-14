import { writable } from 'svelte/store';

export type GameState = {
    words: string[][];
    blankWords: string[][];
    matchWords: boolean[][];
    wordsToFind: string[];
    foundWords: { word: string; row: number; col: number }[];
};

const initialState: GameState = {
    words: [],
    blankWords: [],
    matchWords: [],
    wordsToFind: [],
    foundWords: [],
};

export const gameStore = writable(initialState);