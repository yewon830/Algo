//const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n')
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0])
const numArr = input[1].split("").map(Number)
let ans = 0

for ( let num of numArr){
    ans += num
}

console.log(ans)