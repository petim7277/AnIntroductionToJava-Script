let prompt = require("prompt-sync")();
let message = "";
let info = function information() {
 message = "(Gas Mileage) Drivers are concerned with the mileage their automobiles get." +
             "My Application can provide solution to this problem follow all instructions and enjoy your time here" +
             "Remember to PRESS -1 to stop the operation.";
return message
}
let result = 0;
let combinedMilesPerGallon = 0;
let collectInput = function collectingInput(){
while (true){

    let firstUserInput = Number(prompt("Enter miles driven: "));
    let secondUserInput = Number( prompt("Enter  gallons used: "));
    if (firstUserInput ===-1 && secondUserInput === -1){break};

     result += firstUserInput / secondUserInput ;
     combinedMilesPerGallon += result
}
return combinedMilesPerGallon
}
module.exports = {info,collectInput};


