let prompt = require("prompt-sync")();
let newBalance = 0;
let result = "";

let expenseCalculator = function calculator(){
    let message = "Hello And Welcome Dear customer \n";
    let accountNumber = Number(prompt("Enter your account number: "));
    let beginningBalance = Number(prompt("Enter your current balance: "));
    let totalOfItemsBought = Number(prompt("Enter total of items purchased: "));
    let creditsApplied =Number(prompt("Enter credits applied to your account this month: "))
    newBalance = (beginningBalance + totalOfItemsBought) - creditsApplied;
    if (newBalance > beginningBalance){
        return result = "Credit limit exceeded"
    }
    else return "Your balance is on track";
}
 console.log(expenseCalculator());