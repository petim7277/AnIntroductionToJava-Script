//Write a function doubleArray that takes an array of numbers as input and returns a new array where each element is doubled.
// Use an array method to achieve this without explicitly iterating over the array.

let numbers = [1,2,3,4,5,6,7,8,9,10];
let doublingNumbers = numbers.map((number)=>number * number);
console.log(doublingNumbers);