let prompt = require("prompt-sync")();
let bonus = 9 / 100;
let commission = 200;
let totalCommission = 1;
let totalGrossSales = 1;
let commissionCalculator = function calculate(){
   let grossSales = Number(prompt("Enter ya  gross sales: "));
   let numberOfItem = Number(prompt("Enter number of items: "));
   totalGrossSales = grossSales * numberOfItem;
   totalCommission = bonus * totalGrossSales + commission ;
   return "Ya! sales Earnings is = " + totalCommission;
}
 console.log(commissionCalculator());
