const studentScores = [95,78,85,60,45,92];
function gradingMessage(score) {
    let newArray = [];

    let  message = "";

    if (score >= 90) {
        message  = "A";
        newArray.push(message)
    }

    if (score > 79 && score === 89 ){
        message = "B";
        newArray.push(message)

    }

    if (score >69 && score === 79) {
        message = "C";
        newArray.push(message)

    }

    if (score >60 && score === 69) {
        message = "D";
        newArray.push(message)

    }
    if (score < 60) {
        message = "F";
        newArray.push(message)

    }
    return newArray;
}


let  calculatingGrade = function cal (numberArray){
    let result = 0;
    numberArray.forEach((number)=>{
        result = number;
        //gradingMessage(result);

    });
return gradingMessage(result)
}
//your conditions wrap it in a function and pass in your grade

console.log(calculatingGrade(studentScores));