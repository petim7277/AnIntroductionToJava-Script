const sum = (a,b)=>{
    let ans = a + b ;
    return ans
}

const multiply = (a,b)=>{
    let ans = a * b ;
    return ans
}

const divide = (a,b)=>{
    let ans = a / b ;
    return ans
}
module.exports = {sum,multiply,divide}

const multiplyArray = (firstArray)=> {
    let newArray = [];
    for (let element of firstArray){
        let ans = element * 2 ;
        newArray.push(ans);
    }
    return newArray;
}
module.exports = {sum,multiply,divide,multiplyArray}