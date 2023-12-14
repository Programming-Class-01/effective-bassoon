import { ICard } from "./data_Types";
import { deckGenerator, getRandomIntInclusive } from "./generators";

const MAX_DECK_SIZE = 1000

function shuffler(): ICard[] | Error {
    const orderedDeck = deckGenerator()
    if (orderedDeck instanceof Error) return Error(`deckGenerator threw an error`)
    
    const shuffledDeck: ICard[] = []
    // Checked the size to make sure it's safe to slice for performance.
    if (orderedDeck.length > MAX_DECK_SIZE) return Error(`Stop being stupid. MAX_DECK_SIZE less than deck length.`)
    const iterations = orderedDeck.length
    for (let i = 0; i < iterations; i++) {
        const cardIndex = getRandomIntInclusive(orderedDeck.length)
        if (cardIndex instanceof Error) return Error(`getRandomIntInclusive failed. Somehow. Run away.`)

        const chosenCard = orderedDeck.splice(cardIndex - 1, 1)[0]
        if (chosenCard === undefined) return Error(`Why are multiple things accessing orderedDeck`)
        shuffledDeck.push(chosenCard)
    }

    return shuffledDeck
}

export { MAX_DECK_SIZE, shuffler };