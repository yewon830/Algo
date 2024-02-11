// const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0])
const nodeCnt = Number(input[1])

//연결 이차원 배열
const adjArr = new Array(N+1).fill(0).map(()=> new Array());

for (let i=2; i<2+nodeCnt; i++){
    let num1 = input[i].split(" ").map(Number)[0];
    let num2 = input[i].split(" ").map(Number)[1];

    //양방향 연결
    adjArr[num1].push(num2)
    adjArr[num2].push(num1)
}


function bfs(start){
    const queue = []
    queue.push(start)
    const visited = new Array(N+1).fill(false);
    visited[start] = true;
    let cnt = 0
    while(queue.length > 0){
        let current = queue.shift();
        if (adjArr[current] && adjArr[current].length != 0){
            for (let e of adjArr[current]){
                if(!visited[e]){
                    visited[e] = true;
                    queue.push(e)
                    cnt++
                }
            }
        }
    }
    return cnt
}

console.log(bfs(1))
