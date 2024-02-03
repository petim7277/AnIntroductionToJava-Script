//Write a function isEmptyArray that takes an array as input and returns true if the array is empty,
// and false otherwise. Utilize an array method to perform the check.
let nonEmptyArray = [];
let  emptyArray =[];
let isEmpty = false;

    let empty = function IsEmptyArray(firstArray){
    if (firstArray.length === 0){
        isEmpty = true;
    }
    return isEmpty;
}
console.log(empty(nonEmptyArray));