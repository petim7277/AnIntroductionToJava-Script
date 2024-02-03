
 let firstItem =    {
     name: "Apples",
     Category:"Fruits",
     isHealthy : true}

 let secondItem =    {
    name: "Potato Chips",
     Category:"Snacks",
     isHealthy : false}
 let thirdItem =    {
     name: "Carrots",
     Category:"Vegetables",
     isHealthy : true}
 let fourthItem =    {
     name: "Chocolate Bars",
     Category:"Sweets",
     isHealthy : false}
 let fifthItem =    {
     name: "Greek yogurt",
     Category:"Diary",
     isHealthy : true}
 let sixthItem =    {
     name: "Soda",
     Category:"Beverages",
     isHealthy : false}
 let shoppingList = [firstItem,secondItem,thirdItem,fourthItem,fifthItem,sixthItem];
 let healthyFoods =[];
 let result = [];

const selectingHealthyFood = shoppingList.filter((foods)=>foods.isHealthy === true  )

 selectingHealthyFood.forEach((foodName)=>{
     console.log(foodName.name)
 });


//console.log(selectingHealthyFood);