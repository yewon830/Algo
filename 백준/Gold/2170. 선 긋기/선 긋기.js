const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');


// 포함 : 작은 거 무시
// 겹침 : 중복 값 제거.
//안만남 : 그냥 더하기

let lineCnt = Number(input[0])
let linesArr = []
for (let i=1; i<=lineCnt;i++) linesArr.push(input[i].split(" ").map(Number));

linesArr.sort((a,b)=>a[0]-b[0])

let end = linesArr[0][1]
let start = linesArr[0][0]
let ans = 0
for (let i=1; i<lineCnt;i++){
    // 포함
    let curStart = linesArr[i][0]
    let curEnd = linesArr[i][1]
    if(end >= curEnd){
        continue
        // 겹침
    }else if(curStart<= end && end <= curEnd){
        end = curEnd
    }else if(end < curStart){
        ans  += end - start
        start = curStart
        end = curEnd
    }
}
// start와 end 계산
ans += end - start
console.log(ans)