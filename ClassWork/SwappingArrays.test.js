const {swappingArrays} = require("./SwapingArrays");
test("testThatSwapping_ArrayFunctionWorks",()=>{
let numbers = [[2,3],[4,5]];
let expected = [[2,4],[3,5]];
    let result = swappingArrays(numbers);
    expect(result).toEqual(expected)
});