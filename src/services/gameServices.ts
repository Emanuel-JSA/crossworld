const GameServices = {
    submitGame: async (game: any) => {
        const response = await fetch('http://localhost:3001/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        })
        return await response.json()
    },
}

export default GameServices