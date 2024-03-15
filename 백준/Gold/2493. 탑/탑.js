const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let topCnt = Number(input[0])
let topArr = input[1].split(" ").map(Number)


let stack = []
let ans = []


for(let i = 0; i<topCnt; i++){
    //스택이 비었다 === 수신할 탑이 없다는 뜻
    while(stack.length > 0){
        // 스택의 끝값과 들어오는 값 비교
        // 만약 오는 값이 작으면
        let end = stack[stack.length-1] 
        if(end[1] > topArr[i]){
            ans.push(end[0]+1)
            break
        }else{
            //만약 값이 크면, 스택 끝값은 쓸모가 없으므로 
            stack.pop()
        }
        
    }
    if(stack.length===0){
        ans.push(0)
    }
    stack.push([i,topArr[i]])
    
}

console.log(ans.join(' '))
