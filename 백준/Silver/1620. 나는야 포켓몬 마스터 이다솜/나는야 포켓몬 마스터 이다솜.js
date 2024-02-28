const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");
// 해시 문제-객체랑 다른거 확실히 알아야


let [dogamCnt, questCnt] = input[0].split(" ").map(Number)

let dogam = new Map();

for (let i=1; i<=dogamCnt; i++){
    dogam.set(input[i].trim(),i)
}

let answer = ''

for(let i = dogamCnt+1; i <= dogamCnt + questCnt;i++){
    if(isNaN(input[i])){
        answer += dogam.get(input[i].trim()) + '\n'
    }else{
        answer += input[input[i].trim()] + '\n'
    }
}

console.log(answer)