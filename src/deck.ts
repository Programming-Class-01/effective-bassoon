const cardArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//TODO: figure out how to replace these with the correct unicode characters
const suits = [`clubs`, `diamonds`, `hearts`, `spades`];

const faces = [
    `two`,
    `three`,
    `four`,
    `five`,
    `six`,
    `seven`,
    `eight`,
    `nine`,
    `ten`,
    `jack`,
    `queen`,
    `king`,
    `ace`];

const player = [`Player A`, `Player B`];

interface IDeck {
    cardArray: [],
    suits: [],
    faces: [],
    player: [],

}

export { cardArray, suits, faces, player, IDeck};