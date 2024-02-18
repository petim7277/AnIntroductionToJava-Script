let prompt = require("prompt-sync")();
let squareOfInteger = 0;
let message = "";

let comparingIntegers = function compare(){
    let integer = Number(prompt("Enter  a number: "));
    squareOfInteger = integer * integer;
    if (integer > 100 && squareOfInteger > 100){
        message = "Number and it's square are greater than 100";
    }

    if (integer === 100 && squareOfInteger === 100){
        message = "Number and it's square are equal to 100";
    }

    if (integer !== 100 && squareOfInteger !== 100){
        message = "Number and it's square are NOT equal to 100";
    }

    if (integer < 100 && squareOfInteger < 100){
        message = "Number and it's square are LESS than 100";
    }

    return message;
}

console.log(comparingIntegers());