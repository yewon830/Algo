const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let meetingCnt = Number(input[0]);
let meetingArr = []
// 미팅 배열 넣기
for(let i=1; i<= meetingCnt;i++) meetingArr.push(input[i].trim().split(" ").map(Number))


// 미팅을 최대한 많이 하려면, 시작 시간은 중요하지 않고 일단 끝나는 시간이 빨라야 한다.
// 끝나는 시간 순으로 정렬해서 탐색하고, 다음 첫 시간이 끝시간보다 같거나 나중이라면 바로 채택.

// meetingArr을 내부 배열의 [1]번째 값 기준으로 정렬해야 함. 
meetingArr = meetingArr.sort((a,b)=>{
    if(a[1]===b[1]){
        return a[0] - b[0];
    }else{
        return a[1]-b[1];
    }
    })
let confirmedMeetings = [meetingArr[0]]
for (let i=1; i<meetingCnt; i++){
    let lastMeeting = confirmedMeetings[confirmedMeetings.length-1]
    if( lastMeeting[1] <= meetingArr[i][0]){
        confirmedMeetings.push(meetingArr[i])
    }
}
console.log(confirmedMeetings.length)