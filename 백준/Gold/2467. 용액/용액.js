// 가장 0에 가까운 용액
// 오름차순으로 정렬 후 
// 가장 0에 가까운지 비교
// 이분 탐색 : 
// 배열을 돌면서 하나하나씩 중간 값을 찝는다. 
// 만약 어느 한쪽으로 움직였을 때 절댓값이 더 커지면 그 이후로는 보지 않는다.

const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let liquidsArr = input[1].split(" ").map(Number)

let leftAns = 0;
let rightAns = 0;
let absValue = 2000000000;

for(let i = 0; i< N-1;i++){
    let start = i+1
    let end = N-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        let sum = liquidsArr[mid]+liquidsArr[i]
        if(Math.abs(sum) < absValue){
            leftAns = i
            rightAns = mid
            absValue = Math.abs(sum)
        }
        if(sum === 0){
            break
        }else if(sum<0){
            // 음수면, 더 큰쪽으로
            start = mid +1
        }else{
            end = mid -1
        }
    }
}

console.log(`${liquidsArr[leftAns]} ${liquidsArr[rightAns]}`)