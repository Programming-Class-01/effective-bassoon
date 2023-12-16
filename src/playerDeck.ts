import { shuffler } from "./shuffler";
import { ICard } from "./data_Types";

//this is logically broken. Fix it

// Supposed take a player number, generate that many decks of shuffled cards.

function playerDeckGenerator(players: number): ICard[][] | Error {
    const playerDecks = []
    for (let i = 0; i < players; i++) {
        const shuffledDeck = shuffler()
        if (shuffledDeck instanceof Error) return Error(`Shuffler function spat out an Error, check it`)
        playerDecks.push(shuffledDeck)
    }
    return playerDecks
}

export { playerDeckGenerator }