const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

let [numCnt, goal] = input[0].split(" ").map(Number);
let numsArr = input[1].split(" ").map(Number);
//왼쪽은 그대로 두고, 오른쪽만 끝까지 가면서 목표에 도달하는지 확인
// 목표 도달 시 ans 올려주고 넘어감.

let ans = 0;
for (let i=0; i<numCnt;i++){
    let sum = 0;
    for(let j=0; j<=numCnt-i;j++){
        sum += numsArr[i+j];
        if(sum===goal){
            ans += 1
            break
        }
    }
}

console.log(ans)