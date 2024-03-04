const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let money = require('fs').readFileSync(filePath).toString().trim();

// 5로 최대한 나누는데, 나눴을 때 나머지가 홀수라면 
// -1한다.
money = Number(money);

let moxOfFive = Math.floor(money/5)
let changeOfFive = money % (moxOfFive *5)
if(changeOfFive === 0){
    console.log(moxOfFive)
    // 나머지가 홀수라면
}else if(changeOfFive % 2){
    moxOfFive -= 1
    money -= (moxOfFive * 5)
    let moxOfTwo = Math.floor(money/2)
    if(money%2){
        console.log(-1)
    }else{
        console.log(moxOfFive + moxOfTwo)
    }
    // 나머지가 짝수
}else{
    money -= (moxOfFive * 5)
    let moxOfTwo = Math.floor(money/2)
    if(money%2){
        console.log(-1)
    }else{
        console.log(moxOfFive + moxOfTwo)
    }
}