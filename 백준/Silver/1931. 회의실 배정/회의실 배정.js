const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let meetingCnt = Number(input[0]);
// 배열을 돌면서 뒷쪽을 오름차순으로 정렬
// 만약 같다면 앞쪽도 오름차순으로 정렬. 
// 이전의 끝시간과 지금의 앞시간을 비교하면서, 만약 앞시간이 같거나 크다면 +1
let meetingArr = [];
for(let i=1;i<=meetingCnt;i++){
    meetingArr.push(input[i].split(" ").map(Number))
}
meetingArr.sort((a,b)=>{
    if(a[1]===b[1]){
        return a[0]-b[0];
    }
    return a[1]-b[1];
})
let cnt = 1
let lastMeeting = meetingArr[0]
for(let i =1; i<meetingArr.length; i++){
    let currentMeet = meetingArr[i]
    if( lastMeeting[1] <= currentMeet[0]){
        cnt += 1
        lastMeeting = currentMeet
    }
}

console.log(cnt)