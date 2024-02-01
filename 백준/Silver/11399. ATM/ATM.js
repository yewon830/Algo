let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// let input = [5, `3 1 4 3 2`];

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let sortArr = arr.sort((a, b) => a - b);
let result = 0;

for(let i=0; i<N; i++){
    result += sortArr[i]*(N-i);    
};
console.log(result);