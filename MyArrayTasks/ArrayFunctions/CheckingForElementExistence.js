//Write a function containsElement that takes an array and a value as input and
//returns true if the value exists in the array, and false otherwise. Utilize an array method to perform this check
let names = ["Daniel","Brandon","Jerry","Williams","Sandra"];
let scores = [10,9,0,4,2];

let value = 10;
let user = "Daniels";
let isTrue = false;
let valueIsTrue = false;
names.forEach((name)=>{
    if (name === user) {
        isTrue = true;
    }
  return isTrue
});

scores.forEach((score)=>{
    if (score === value){
        valueIsTrue = true;
    }
    return valueIsTrue;
})

console.log(isTrue);
console.log(valueIsTrue);