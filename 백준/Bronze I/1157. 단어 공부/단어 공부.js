// 받아서 중복 생략하는 set하나
//그것들 수 몇개인지 세기.
//같은거 나오면 ?

//const words = require('fs').readFileSync("./input.txt").toString().trim();
const words = require('fs').readFileSync('/dev/stdin').toString().trim();
const newWords = []
for (let word of words){
    newWords.push(word.toUpperCase())
}
let wordsSet = new Set(newWords);
let wordsObj = {}
for (let word of wordsSet){
    wordsObj[word] = 0
}

for (let word of newWords){
    wordsObj[word] += 1
}
// 최댓값 찾기
let maxWordsCnt = Math.max(...Object.values(wordsObj))
let wordsArr = Object.keys(wordsObj)
let maxWord = ''

let checkDouble = 0;

for (let key of wordsArr){
    if(wordsObj[key] === maxWordsCnt){
        maxWord = key
        checkDouble += 1
    }
}

if (checkDouble >=2){
    console.log('?');
}else{
    console.log(maxWord)
}


