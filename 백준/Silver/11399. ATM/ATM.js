let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');

//입력 다 받음
let N = Number(input[0]);
let orderArr = input[1].split(" ").map(Number);
orderArr.sort((a,b)=>a-b)
let result = 0;
for (let i = 1; i < orderArr.length; i++){
    orderArr[i] += orderArr[i-1]
}
orderArr.forEach(num =>{
    result += num;
})
console.log(result)