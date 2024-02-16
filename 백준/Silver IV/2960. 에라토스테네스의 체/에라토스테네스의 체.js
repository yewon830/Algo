 const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

//const input = require('fs').readFileSync("./input.txt").toString().trim().split(' ');

let maxNum = input[0]
let maxCount = input[1]
let countingNum = 1
let intArr = [] // 2부터 maxNum까지의 배열

for (let i=2; i<=maxNum;i++){
    intArr.push(i)
}
let result = []
while(countingNum <=maxCount){
    let minNum = intArr[0]
    for (let i=0; i<intArr.length;i++){
        if(countingNum > maxCount){
            continue
        }
        if(intArr[i]%minNum === 0){
            countingNum += 1
            result = intArr.splice(i,1) // i번째 요소 제거(원 배열에도 영향)
        }
    }  
}
console.log(result[0])