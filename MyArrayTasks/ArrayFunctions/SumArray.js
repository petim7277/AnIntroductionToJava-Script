let gameBoard = [
    { row: 0, column: 0, value: 'X' } ,
    { row: 0, column: 1, value: 'X' } ,
    { row: 0, column: 2, value: 'O' } ,
    { row: 1, column: 0, value: 'O' } ,
    { row: 1, column: 2, value: 'X' },
    { row: 2, column: 0, value: 'X' } ,
    { row: 2, column: 1, value: 'O' } ,
    { row: 2, column: 2, value: 'O' } ,
]
let newArray = [[],[],[]]
for (const piece of gameBoard) {
    newArray[piece.row][piece.column] = piece.value;
}
console.log(newArray);