//Finding maximum element

let scores = [100,101,50,77,91,200,890];
let max = scores[0];

scores.forEach((score)=>{
 if (score > max){
 max = score
  return max;
 }
});
console.log(max);