// 스택에 push 하는 수는 반드시 오름차순.

const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let numCnt = Number(input[0])
let queue = []
let stack = []
let ans = ""
for (let i=1; i<=numCnt; i++){
    queue.push(i)
}

for (let i=1; i <= numCnt;i++){
    let targetNum = Number(input[i])
    while(queue[0]<=targetNum){
        stack.push(queue.shift())
        ans += '+\n'
    }
    if(stack[stack.length-1] === targetNum){
        stack.pop()
        ans += '-\n'
    }else{
        ans = 'NO'
        break
    }
}

console.log(ans)