let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// const input = require('fs').readFileSync("./input.txt").toString().trim().split('\n');


function count(arr){
    let obj = {}
    for (let i = 0; i<arr.length; i++){
        let cnt = arr.filter(e=>e===arr[i]).length
        obj[arr[i]] = cnt
    }
    let max_cnt = -1
    let isDouble = false;
    let char = ''
    for (let key in obj){
        if(obj[key] > max_cnt){
            max_cnt = obj[key]
            char = key
            isDouble = false
        }else if(obj[key]===max_cnt){
            isDouble = true
        }
    }
    if(isDouble){
        return '?'
    }else{
        return char
    }
}


//빈도수 체크 -> 많으면 e . 만약 빈번한게 같으면 ? 출력
//반복문 돌면서 가장 많은 cnt와 값 출력, 만약 
let N = Number(input[0]);
for (let i = 1; i<N+1; i++){
    let arr = input[i].trim().replace(/ /g,'').split("")
    console.log(count(arr));
}