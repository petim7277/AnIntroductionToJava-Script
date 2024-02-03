let firstObject ={
    "name":"jerry",
    "population" : 100,
    "temp": 10.5,
    "currency": "naira",};
let secondObject ={
    "name":"sandra",
    "population" : 101,
    "temp": 10.10,
    "currency": "pounds",};

let thirdObject ={
    "name":"jeniffer",
    "population" : 102,
    "temp": 10.12,
    "currency": "pence",};

let fourthObject ={
    "name":"henry",
    "population" : 103,
    "temp": 10.13,
    "currency": "dollar",};

let fifthObject ={
    "name":"jesse",
    "population" : 104,
    "temp": 10.5,
    "currency": "europe",};

let sixthObject ={
    "name":"aisha",
    "population" : 105,
    "temp": 10.14,
    "currency": "gold",};

let seventhObject ={
    "name":"joan",
    "population" : 106,
    "temp": 10.15,
    "currency": "ruby",};

let eightObject ={
    "name":"jemimah",
    "population" : 107,
    "temp": 10.16,
    "currency": "silver",};

let ninthObject ={
    "name":"jaden",
    "population" : 108,
    "temp": 10.17,
    "currency": "coin",};

let newArray = [
    [null,firstObject,secondObject,thirdObject],
    [fourthObject,fifthObject,null,sixthObject],
    [seventhObject,null,eightObject,ninthObject],
];
let result = [];
for (let index = 0; index < newArray.length; index++) {
    for (let count = 0; count < newArray[index].length; count++) {
        result.push(newArray[index][count])
    }
}
console.log(result);
