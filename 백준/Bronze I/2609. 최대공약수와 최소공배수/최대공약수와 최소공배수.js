//let input = require('fs').readFileSync('./input.txt').toString().trim().split(" ");
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

let num1 = Number(input[0])
let num2 = Number(input[1])

while(num1%num2 !==0){
    let a = num1%num2; //변수 따로 넣어주기 그냥 num1%num2값 해주면 num1값은 이미 변한 상태라 안됨
    if(a>0){
        num1 = num2;
        num2 = a
    }

}

console.log(num2)
console.log(input[0]*input[1]/num2)