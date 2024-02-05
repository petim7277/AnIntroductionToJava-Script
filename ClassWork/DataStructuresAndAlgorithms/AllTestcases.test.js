const {info,collectInput} = require("./GasMileage")
test("testThatGas_MileageApplication_Works",()=>{

    let result = collectInput();
    expect(result).toBe(6.75)
});