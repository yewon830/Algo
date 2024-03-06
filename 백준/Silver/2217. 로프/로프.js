const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 물체의 최대 중량

let ropeCnt = Number(input[0]);
let ropesArr = [];
for (let i =1; i<=ropeCnt;i++) ropesArr.push(Number(input[i]))
ropesArr.sort((a,b)=>b-a)

// 큰 수 순으로 정렬해서, i를 하나씩 늘려나간다. 그리고 배열의 i[]의 
// 인덱스만큼 곱하기. 
let maxWeight = 0;
for(let i=0;i<ropesArr.length;i++){
    if(ropesArr[i]*(i+1) > maxWeight){
        maxWeight = ropesArr[i]*(i+1)
    }
}
console.log(maxWeight)