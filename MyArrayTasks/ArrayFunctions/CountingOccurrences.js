//Write a function countOccurrences that takes an array and a value as input and returns the
// number of times the value appears in the array. Utilize an array method to count the occurrences.


let myNumbers = [1,1,2,2,3,4,5,5,5,6];
let count = 0;
let countingOccurrences = function mostOccurring (anArray,value) {

    anArray.forEach((element)=>{
        if (value ===  element){
            count ++;
        }

    });
    return count;
}

console.log(countingOccurrences(myNumbers,5))