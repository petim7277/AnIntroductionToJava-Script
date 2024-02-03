function squaringIntegers(firstNumber, secondNumber){
    let squareOfFirstNumber = firstNumber * firstNumber;
    let squareOfSecondNumber = secondNumber * secondNumber;
    let sumOfSquares = squareOfFirstNumber + squareOfSecondNumber;
    let differenceOfSquares = squareOfFirstNumber / squareOfSecondNumber;
      let result = `\n\tSquare of first number\n\t` + squareOfFirstNumber;
      let resultTwo = `\n\tSquare of second number\n\t` + squareOfSecondNumber;
      let resultThree = `\n\tSum of squares of  first number and second number\n\t` + squareOfSecondNumber;
      let resultFour = `\n\tDiffrence  of the squares (first number squared minus the second number squared)\n\t`+differenceOfSquares;

return result + resultTwo + resultThree + resultFour;
}

console.log(squaringIntegers(2,5));