let array = [["car",2000], ["Truck",500],["Bus",5000]];

let addingarray=array.push(["scooter",1500]);
let addingToCar = array[0];
let result = addingToCar.push(["Toyota","Nissan"]);
let addingToTruck = array[1];
let resultTwo = addingToTruck.push(["Ford"])
let addingToBike = array[2];
let resultThree = addingToBike.push(["Honda"])
console.log(array)