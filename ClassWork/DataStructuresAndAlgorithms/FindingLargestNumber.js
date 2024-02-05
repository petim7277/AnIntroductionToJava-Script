let prompt = require("prompt-sync")();
let findingLargest  = function calculateLargest (){
    let largestNumber = Number(prompt("Enter ya units sold: "));
    for (let count = 1; count <= 10 ; count++) {
        let secondInput = Number(prompt("Enter ya units sold: "));
        if (secondInput > largestNumber){
            largestNumber = secondInput;
        }
    }
    return "The largest unit sold is = "+ largestNumber;
}

console.log(findingLargest());

