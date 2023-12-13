import { cardArray, suits, faces, IDeck } from "./deck";

function deckGenerator(cardArray: number[], suits: string[], faces: string[] ): IDeck[] | Error {
    const newDeck: IDeck[] = [];
    if (cardArray.length != faces.length) {
        return Error(`cardArray and faces array not equal in size`)
    }

    for (let i = 0; i < suits.length; i++) { //this should never exceed 3.

        for (let c = 0; c < cardArray.length; c++) { //this should never exceed 13.
            const points = cardArray[c]
            const suit = suits[i]
            const face = faces[c]
            if (points === undefined) {
                return Error(`CardArray at ${cardArray[c]} is undefined`)
            }
            if (suit === undefined) {
                return Error(`suits at ${suits[i]} is undefined`)
            }
            if (face === undefined) {
                return Error(`faces ar at ${faces[c]} is undefined`)
            }

            const card = { points, suit, face }

            newDeck.push({card})
        }
    }
    console.log(newDeck)
    return newDeck;
}

deckGenerator(cardArray, suits, faces);