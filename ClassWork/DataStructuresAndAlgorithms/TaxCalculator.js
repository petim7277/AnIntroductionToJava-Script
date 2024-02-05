let prompt = require("prompt-sync")();
let tax = 0 ;
let taxCalculator = function calculator(){
  let citizenName =String( prompt("Enter ya name: "));
  let citizenSalary = Number(prompt("Enter ya total yearly salary:"));
  tax = (15 / 100 )* citizenSalary;
  return"Ya tax is "+ tax;
}
 console.log(taxCalculator());
