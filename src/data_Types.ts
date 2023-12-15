const cardArray = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
];

//TODO: figure out how to replace these with the correct unicode characters
const suits = [
    `♣`,
    `♦`,
    `♥`,
    `♠`,
];

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
    `ace`
];


interface ICard {
    points: number,
    suit: string,
    face: string,
}

interface IDeck {
    player: number;
    card: ICard;
}

export { cardArray, suits, faces, ICard, IDeck };