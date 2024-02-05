//(Sales Commission Calculator) A large company pays its sales people on a commission basis.
// The salespeople receive $200 per week plus 9% of their gross sales for that week. For example, a
// salesperson who sells $5,000 worth of merchandise in a week receives $200 plus 9% of $5,000, or
// a total of $650. You’ve been supplied with a list of the items sold by each salesperson. The values of
// these items are shown in Fig. 4.33. Develop a Java application that inputs one salesperson’s items
// sold for last week and calculates and displays that salesperson’s earnings. There’s no limit to the
// number of items that can be sold.
// pseudoCode
// =============
// 1. input sales person items sold for last week
// 2. calculate and display the sales person's earnings
// commission = 200
// grossSales = 100
//
// 3. calculation = 9/ 100 * grossSales

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
