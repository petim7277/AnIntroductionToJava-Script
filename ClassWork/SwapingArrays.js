let numbers = [[2,3], [4,5]];

const swappingArrays = function swap(numberArray){
    let newArray = [[], []];
    for (let index = 0; index < numberArray.length; index++) {
        for (let indexTwo = 0; indexTwo < numberArray[index].length; indexTwo++) {
            newArray[index][indexTwo] = numberArray [indexTwo][index];
        }
    }
    return newArray;
}
module.exports = {swappingArrays};
