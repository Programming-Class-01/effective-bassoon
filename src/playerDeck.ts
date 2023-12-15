import { shuffler } from "./shuffler";

function playerDeckGenerator(players: number) {
    const playerDecks = []
    for (let i = 1; i <= players; i++) {
        const playerDeck = []
        const player = i
        const testDeck = shuffler()
        if (testDeck instanceof Error) return Error(`shuffler call failure`)
        const assignedDeck = testDeck
        playerDeck.push({ player: player, deck: assignedDeck })
        playerDecks.push(playerDeck)
    }
    return playerDecks
}

console.log(playerDeckGenerator(2))

export { playerDeckGenerator }