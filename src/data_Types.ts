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



export { cardArray, suits, faces, ICard };