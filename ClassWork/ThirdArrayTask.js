let firstPiece = {
    "row": 0,
    "column": 1,
    "value": "X",
}

let secondPiece = {
    "row": 0,
    "column": 1,
    "value": "X",
}

let thirdPiece = {
    "row": 0,
    "column": 2 ,
    "value": "O",
}

let fourthPiece = {
    "row": 1,
    "column": 0,
    "value": "O",
}

let fifthPiece = {
    "row": 1,
    "column": 2 ,
    "value": "X",
}

let sixthPiece = {
    "row": 2,
    "column": 0 ,
    "value": "X",
}

let seventhPiece = {
    "row": 2,
    "column": 1 ,
    "value": "O",
}

let eightPiece = {
    "row": 2,
    "column": 2 ,
    "value": "O",
}

let gameBoard =
    [
    [firstPiece],
    [secondPiece],
    [thirdPiece],
    [fourthPiece],
    [fifthPiece],
    [sixthPiece],
    [seventhPiece],
    [eightPiece],

    ];
for (const gameBoardElement of gameBoard) {
    console.log(gameBoardElement)
}