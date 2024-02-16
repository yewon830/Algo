

// 팩토리얼 구하기
// 3! = 3*2!*1!

// 뒤에서부터 0이 안나올 때까지 0 개수 카운트

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
//const input = require('fs').readFileSync("./input.txt").toString().trim();

let num = Number(input)
let zeroCnt = 0

for(let i=5; i<=num; i*=5){
    zeroCnt += Math.floor(num/i);
}

console.log(zeroCnt)

// // 팩토리얼 구하는 재귀함수
// function factorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * factorial(n-1)
// }
