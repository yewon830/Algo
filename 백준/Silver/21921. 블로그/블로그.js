// 구간 합 : 연속된 구간의 합 중 가장 큰 것. + 그 구간의 갯수

const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

const [[totalDays, days], visitor] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));


let sumVisitor = visitor.slice(0,days).reduce((sum,cur)=>sum+cur,0);
let maxVisitor = sumVisitor;
let maxCnt = 1; 
for(let i=0; i<totalDays-days;i++){
    sumVisitor -= visitor[i]
    sumVisitor += visitor[i+days]
    if(sumVisitor >maxVisitor ){
        maxVisitor = sumVisitor
        // 최댓값 갱신이라 갯수도 갱신
        maxCnt = 1
    }else if (sumVisitor === maxVisitor){
        maxCnt++;
    }
}
if(maxVisitor===0){
    console.log('SAD')
}else{
    console.log(maxVisitor);
    console.log(maxCnt);
}


// 시간 초과
// for (let i=0; i <= totalDays-days; i++){
//     let countVisitor = 0;
//     for(let j=0; j < days; j++){
//         countVisitor += visitor[i+j]
//     }
//     if(sumVisitor<countVisitor){
//         sumVisitor = countVisitor
//     }
// }
// //최댓값 계산 완료
// for (let i=0; i <= totalDays-days; i++){
//     let countVisitor = 0;
//     for(let j=0; j < days; j++){
//         countVisitor += visitor[i+j]
//     }
//     if(countVisitor === sumVisitor){
//         maxCnt += 1
//     }

// }




