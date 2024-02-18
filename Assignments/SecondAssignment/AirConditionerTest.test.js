const {switchOn,switchOff,increaseTemperature,decreaseTemperature} = require("./AirConditioner");
test("testThat_whenITurnOn_TheAcItComesOn",()=>{
let oN = switchOn()
let result = true;
expect(result).toEqual(oN)
});