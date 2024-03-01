const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

// 동일한 간격으로 윈도우를 한 칸씩 옮기기.

let [totalDays, days] = input[0].split(" ").map(Number);
let temperaturesArr = input[1].split(" ").map(Number);

// 슬라이딩 윈도우
// 첫 간격만큼 더한다.
// i가 totalDays-days와 같을 때까지.
// 최댓값은 sum 
// 한칸씩 한칸씩 옮겨서 첫값은 빼고, 뒷값은 더한다. 
let sum = temperaturesArr.slice(0,days).reduce((sum,cur)=>sum+cur,0)
let maxOfSum = sum
for(let i=0 ; i < totalDays-days; i++){
    sum -= temperaturesArr[i]
    sum += temperaturesArr[i+days]
    if(sum > maxOfSum){
        maxOfSum = sum
    }
}
console.log(maxOfSum)