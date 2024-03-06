const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let machineCnt = Number(input[0])
let machinesArr = input[1].split(" ").map(i=> BigInt(i));
machinesArr.sort((a,b)=>a < b? -1:1)
// 제일 큰게 제일 작은거랑 붙어야 함.,

// 1 2 3 4 5

// 정렬한 다음에 제일 큰 거 놔두고, 처음에서-> <-끝에서 이렇게
let ans = 0
if(machineCnt%2==1){
    ans = machinesArr.pop()
}
// 한개ㅔ를 빼서 개수는 무조건 짝수임
for(let i=0; i<machinesArr.length/2;i++){
    let sum = machinesArr[i]+ machinesArr[machinesArr.length-1-i]
    if(sum>ans){
        ans = sum
    }
}
console.log(String(ans))