// (Arithmetic, Smallest and Largest) Write an application that inputs three integers from the
// user and displays the sum, average, product, smallest and largest of the numbers. Use the techniques
// shown in Fig. 2.15. [Note: The calculation of the average in this exercise should result in an integer
// representation of the average. So, if the sum of the values is 7, the average should be 2, not
// 2.3333….]
// pseudoCode
//===============
// 1. collect three integers from the  user.
// 2. display the sum,
// 3. display average,
// 4. display product,
// 5. display smallest,
// 6. display largest,
let prompt = require("prompt-sync")();
let sum = 0 ;
let average= 0 ;
let product= 1 ;
let smallest  = 0;
let largest = 0;
let count = 0;
let arithmetic = function calculate(){
    for (count = 0; count < 3 ; count++) {
     let userInput = Number(prompt("Enter a number: "))
        smallest = userInput;
        sum += userInput;
     product *= userInput;
     if (smallest < userInput){
         smallest = userInput;
     }
     if (userInput> smallest){
         largest = userInput
     }
    }
    average = sum / count
    console.log(`The sum of numbers entered is =`,sum);
    console.log(`The average of numbers entered is =`,average);
    console.log(`The product of numbers entered is =`,product);
    console.log(`The smallest of numbers entered is =`,smallest);
    console.log(`The largest of numbers entered is =`,largest);
   return calculate();
}

console.log(arithmetic());