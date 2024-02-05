 const {sum,multiply, divide,multiplyArray} = require("./index")
test("add a and b",()=>{
    let a = 2;
    let b = 4;
    let result = sum(a,b);
    expect(result).toBe(6)
});

test("multiply a and b",()=>{
    let a = 2;
    let b = 4;
    let result = multiply(a,b);
    expect(result).toBe(8)
});

 test("find the diffrence of  a and b",()=>{
     let a = 4;
     let b = 2;
     let result = divide(a,b);
     expect(result).toBe(2)
 });

 test("multiply elements in an array by 2",()=>{
     let scores= [1,2,3,4];
     let result = multiplyArray(scores);
     let expected = [2,4,6,8]
     expect(result).toEqual(expected);
 });