let pushingZeros = function (numberArray){
    let newArray = [];
    let zeros = [];
    for (let index = 0; index < numberArray.length ; index++) {
        if (numberArray[index] !== 0){
            newArray.push(numberArray[index])
        }
    }
    for (let index = 0; index < numberArray.length ; index++) {
        if (numberArray[index] === 0){
            newArray.push(numberArray[index])
        }
    }
  return newArray;
}

module.exports = {pushingZeros};