import type { GameState } from '../store';
import ApiSingleton from './ApiSingleton';

const GameServices = {
    submitGame: async (game: GameState) => {
        return await ApiSingleton.post('crossword', game);
    },
    getGames: async () => {
        return await ApiSingleton.get('crossword');
    },
    getLastGame: async () => {
        return await ApiSingleton.get('/last');
    }
}

export default GameServices;