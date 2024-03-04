const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 합쳐진 에너지 드링크의 양을 최대로 하는 방법 : 
// 제일 큰 값을 그대로 놔두고, 그거 베이스로 나머지를 전부 반씩 더함

let cnt= Number(input[0])
let drinksArr = input[1].split(" ").map(Number);

let maxOfDrinks = Math.max(...drinksArr)
let maxOfIndex =drinksArr.indexOf(maxOfDrinks);
drinksArr.splice(maxOfIndex,1)
for(let drink of drinksArr){
    maxOfDrinks += drink/2
}

console.log(maxOfDrinks)
