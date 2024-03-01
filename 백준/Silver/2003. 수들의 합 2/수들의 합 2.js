const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");

let [numCnt, goal] = input[0].split(" ").map(Number);
let numsArr = input[1].split(" ").map(Number);

// 투 포인터
// 시작점과 끝점을 0,0 혹은 0,1으로 둔다
// 경우의 수를 나눈다. 목표보다 크면 <- 시작점을 빼고 왼쪽 포인터를 한 칸 앞으로
// 목표보다 작으면 -> 한칸 더 가서 더한다
// 같으면 -> 이제 새로 또 봐야하니까 시작점을 빼고 1 증가시킨다.  cnt도 증가시키고 반복문 탈출
let start = 0
let end = 1;
let ans = 0;

while(start<=end && end<=numCnt){
    let total = 0;
    for(let i=start; i<end;i++){
        total += numsArr[i]
    }
    if(total < goal){
        end += 1
    }else if(total>goal){
        start += 1
    }else{
        ans += 1
        end += 1 //계속 봐야하므로 
    }

}
console.log(ans)