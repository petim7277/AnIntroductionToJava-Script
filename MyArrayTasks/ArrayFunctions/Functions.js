// let solvingHighestCommonFactor = function (numbers){
//     let count = 2;
//     for (const number of numbers) {
//        // console.log(numbers)
//         if (number % count == 0){
//           result = number.push(count);
//         }
//     }
//     return result;
// }

//Using for each loop in javaScript
let numbers = [8,4,12];
let result = [];

numbers.forEach((number) =>{
    let ans = number + 1;
    result.push(ans);
})
//console.log(result);


// using filter in javaScript

let names = ["keisha","sandra","jaden","zayn"]

   let removingLargeName = names.filter((name)=> name.length > 4);
//console.log(removingLargeName)
//this function reminds me of writing function as an argument combined with an arrow function

//using Array method map in javascript

let studentGrade = [10,2,20,15];
let calculatingStudentGrade = studentGrade.map((grade)=> grade * grade);
//console.log(calculatingStudentGrade);

// function sumArray

const employeeSalary = [1000,500,400,300,200,250];
let calculatingSalary = employeeSalary.sort((sorting)=> sorting )
console.log(calculatingSalary);