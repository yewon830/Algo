const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

let [N,M] = input[0].split(" ").map(Number);
let origin = {};
for (let i=1;i<=N;i++){
    origin[input[i].trim()] = i
}

let cnt = 0;
for (let i=N+1; i<=N+M; i++){
    if(input[i].trim() in origin){
        cnt += 1
    }
}

console.log(cnt)