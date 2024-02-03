//Write a function concatArrays that takes two arrays as input and returns a new array that is the concatenation
// of the two input arrays. Use an array method to concatenate the arrays.

const  firstArray = [98,21];
const  secondArray = [" score "," Age "];
let result = [];
let concatArrays = function concat(firstArray, secondArray){
    result = firstArray.concat(secondArray)
    return result;
}
 console.log(concatArrays(secondArray,firstArray));