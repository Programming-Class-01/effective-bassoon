import { cardArray, suits, faces, IDeck } from "./deck";

function deckGenerator(cardArray: number[], suits: string[], faces: string[] ): IDeck[] | Error {
    const newDeck: IDeck[] = [];
    for (let i = 0; i < suits.length; i++) { //this should never exceed 3.
        for (let c = 0; c < cardArray.length; c++) { //this should never exceed 13.
            if (cardArray[c] == undefined) {
                return Error(`cardArray broken, verify contents`);
            }
            if (suits[i] == undefined) {
                return Error(`suitsArray broken, verify contents`)
            }
            if (faces[c] == undefined) {
                return Error(`suitsArray Broken, verify contents`)
            }
            const card = { points: cardArray[c], suit: suits[i], face: faces[c] }
            newDeck.push({card})
        }
    }
    console.log(newDeck)
    return newDeck;
}

deckGenerator(cardArray, suits, faces);