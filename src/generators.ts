import { cardArray, suits, faces, ICard } from "./data_Types";

function deckGenerator(): ICard[] | Error {
    const newDeck: ICard[] = [];
    if (cardArray.length !== faces.length) {
        return Error(`cardArray and faces array not equal in length`)
    }

    for (let i = 0; i < suits.length; i++) { //this should never exceed 3.

        for (let c = 0; c < cardArray.length; c++) { //this should never exceed 13.
            const points = cardArray[c]
            const suit = suits[i]
            const face = faces[c]

            if (typeof points === `undefined`) return Error(`CardArray at ${cardArray[c]} is undefined`)
            if (typeof suit === `undefined`) return Error(`CardArray at ${suits[i]} is undefined`)
            if (typeof face === `undefined`) return Error(`CardArray at ${faces[c]} is undefined`)

            newDeck.push({points: points, suit: suit, face: face})
        }
    }
    return newDeck;
}

function getRandomIntInclusive(max: number, min = 1): number | Error {
    if (max > Number.MAX_SAFE_INTEGER || max < 0) {
        return Error(`maximum integer size exceeded or maximum set to less than zero.`)
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    const range = max - min + 1
    const randomNumber = (Math.floor(Math.random() * range + min));
    return randomNumber
}

export { deckGenerator, getRandomIntInclusive };