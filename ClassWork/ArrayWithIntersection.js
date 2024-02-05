let studentAge = [2,3,5,6,7,8];
let studentScores = [1,3,7,10,11,8]
let setArray = function solvingSetArray(firstArray,secondArray){
    let score = 1;
    let age = 0;
   firstArray.forEach((age)=>{

       secondArray.forEach((score)=>{
        if (age === score){
        }
       });
    });
    return score

}

console.log(setArray(studentAge,studentScores));