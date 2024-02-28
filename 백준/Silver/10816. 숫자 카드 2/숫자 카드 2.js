const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split("\n");


let cardCnt = Number(input[0]);
let SGCards = input[1].split(" ").map(Number).sort((a,b)=> a-b);
let targetCnt = Number(input[2]);
let targetCards = input[3].split(" ").map(Number);
let cardsObj = {}

//아예 딕셔너리로 만들어서 찾기
// 딕셔너리로 만들 떄 set으로 중복 없애서 키 만들지 말고 그냥 먼저 있었으면 +1 아니면 1이면 되잖아

for (let i=0; i<cardCnt;i++){
    if(SGCards[i] in cardsObj){
        cardsObj[SGCards[i]] += 1
    }else{
        cardsObj[SGCards[i]] = 1
    }
}

let answer = '';
for (let i = 0; i<targetCnt; i++){
    if(targetCards[i] in cardsObj){
        answer += cardsObj[targetCards[i]].toString() + ' '
    }else{
        answer += '0 '
    }
}
console.log(answer)