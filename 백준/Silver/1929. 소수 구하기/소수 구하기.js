const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let M = Number(input[0]);
let N = Number(input[1]);
let ans = [];

//소수 : 나눴을 때 수가 1과 자기자신만 있음.
for(let i = M; i <= N; i++){
    //에라토스테네스의 체. (루트까지만 확인)
    let isSosu = true;
    for(let j=2; j<=i**0.5;j++){
        if(i%j===0){
            isSosu = false;
            break
        }
    }
    if(isSosu && i !== 1){
        ans.push(i)
    }
}
console.log(ans.join('\n'))