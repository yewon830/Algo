
//const input = require('fs').readFileSync("./input.txt").toString().trim().split(" ");
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

let a = Number(input[0])
let b = Number(input[1])

for (let i=a; i<=b; i++){
    let flag = false;
    if(i===1){
        continue
    }
    for(let j=2; j<=i**0.5; j++){
        if(i%j === 0){
            flag = true;
            break
        }
    }
    if(!flag){
        console.log(i)
    }
}
