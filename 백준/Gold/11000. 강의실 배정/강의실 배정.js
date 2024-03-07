const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let lectureCnt = Number(input[0])
let timesArr = []
for(let i = 1; i<=lectureCnt;i++){
    let times = input[i].split(" ").map(Number)
    timesArr.push([times[0],1]) 
    timesArr.push([times[1],-1])
}
// 수업 끝과 시작이 동시에 발생하면, 수업 종료가 먼저 와야해서 끝시간도 정렬 필요함. 수업이 시작하면 강의 +1 끝나면

// 시작값으로 정렬
timesArr.sort((a,b)=>{
    if(a[0]===b[0]){
        return a[1]-b[1]
    }
    return a[0]-b[0]

})

let nowLectureCnt = 0;
let ans = 0;
for (let time of timesArr){
    nowLectureCnt += time[1]
    if (nowLectureCnt> ans){
        ans = nowLectureCnt
    }
}
console.log(ans)