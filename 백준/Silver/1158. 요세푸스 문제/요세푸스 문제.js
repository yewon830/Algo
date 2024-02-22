const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split(" ");


// 변수 정의
let peopleCnt = Number(input[0]);
let targetCnt = Number(input[1]);

// 큐
let circle = []
for (let i=1; i<=peopleCnt;i++){
    circle.push(i)
}

// 정답 변수
let answer = []

// 
while(circle.length>0){
    for (let i=1; i<targetCnt; i++){
        circle.push(circle.shift());
        // 순서 바꿔치고
    }
    // 타켓번째
    let target = String(circle.shift());
    answer.push(target)
}

console.log("<" + answer.join(", ") + ">")
