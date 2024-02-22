const filePath = process.platform === 'linux' ? 
'/dev/stdin' : './input.txt';

let stick = require('fs').readFileSync(filePath).toString().trim();

// ()는 레이저
// (는 막대기 시작 )는 끝

//(가 나오면 배열에 넣었다가 (다음에 바로 )가 나오면 배열 개수를 셈(빼지 말고)

//) 만 단독으로 있으면-> 바로 pop하면서 개수 추가 +1

let stickLength = stick.length;
let stack = []
let cnt = 0

let i = 0
while(i<stickLength){
    // 레이저 확인
    if(i<stickLength-1 && stick[i]==='(' && stick[i+1]===')'){
        cnt += stack.length
        i += 2
        continue
    }
    if(stick[i]==='('){
        stack.push('(')
        i += 1
    }else{
        stack.pop()
        cnt += 1
        i += 1
    }
}

console.log(cnt)