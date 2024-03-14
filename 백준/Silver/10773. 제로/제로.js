const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 0을 부르면, 그 전의 수를 없애면 된다.

//값이 커보이는데, 아예 BigInt로 받아야지.
let K = Number(input[0])
let numArr = []
for(let i=1; i<K+1;i++) {
    if(BigInt(input[i].trim())===0n){
        numArr.pop()
    }else{
        numArr.push(BigInt(input[i].trim()))
    }
}
let ans = 0n;
for(let num of numArr){
    ans += num
}

console.log(String(ans))

