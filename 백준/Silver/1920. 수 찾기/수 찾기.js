// const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0])
const targetNum = input[1].split(" ").map(Number);
const M = Number(input[2])
const numLst = input[3].split(" ").map(Number);

targetNum.sort((a,b)=> a- b)

let answer = '';

for (let num of numLst){
    flag = false;
    let start = 0;
    let end = N-1;
    while (start <= end){
        let mid = Math.floor((start + end)/2)
        if(targetNum[mid] > num){
            end = mid-1;
        }else if (targetNum[mid] < num){
            start = mid+1;
        }else{
            answer += '1\n';
            flag = true;
            break;
        }

    }
    if(!flag){
        answer += '0\n'
    }
}

console.log(answer)