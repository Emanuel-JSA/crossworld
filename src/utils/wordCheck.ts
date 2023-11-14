import { get } from 'svelte/store';
import { gameStore } from '../store';

export function checkWord(grid: string[][], word: string): boolean {
    const directions = [
        { x: 0, y: 1 }, // horizontal
        { x: 1, y: 0 }, // vertical
    ];

    // Verifica cada posição da grade.
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            // Verifica em cada direção.
            for (const dir of directions) {
                if (checkWordInDirection(grid, word, row, col, dir)) {
                    console.log('Found word: ' + word);
                    return true;
                }
            }
        }
    }

    return false;
}

function checkWordInDirection(
    grid: string[][],
    word: string,
    row: number,
    col: number,
    dir: { x: number; y: number }
): boolean {
    const storeValue = get(gameStore);

    // Create a copy of matchWords
    const newMatchWords = storeValue.matchWords.map(row => [...row]);

    const wordLength = word.length;

    // Check if the word fits in the direction.
    const endRow = row + dir.x * (wordLength - 1);
    const endCol = col + dir.y * (wordLength - 1);
    if (endRow < 0 || endRow >= grid.length || endCol < 0 || endCol >= grid[row].length) {
        return false;
    }

    // Check if the word is found in the direction.
    for (let i = 0; i < wordLength; i++) {
        const currentRow = row + dir.x * i;
        const currentCol = col + dir.y * i;
        if (grid[currentRow][currentCol] !== word[i]) {
            return false;
        }
        newMatchWords[currentRow][currentCol] = true;
    }

    // Update the game store with the found word and the new matchWords.
    gameStore.set({
        ...storeValue,
        foundWords: [...storeValue.foundWords, { word, row, col }],
        matchWords: newMatchWords
    });

    console.log(get(gameStore));
    return true;
}