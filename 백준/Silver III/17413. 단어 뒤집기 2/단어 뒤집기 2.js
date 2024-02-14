
 //const input = require('fs').readFileSync("./input.txt").toString().trim()+'.';
let input = require('fs').readFileSync('/dev/stdin').toString().trim()+'.';

// split하지 않고,(<>가 있어서) 차근차근 스택에 넣고 뺀다
// tag가 아닐때 : 
 // < : stack 다 토해내기. tag 트루로 변환
 // 공백 : stack 빌때까지 토해내고, 공백 추가
 // 나머지: 스택에 넣기./
// tag일때 :
    // tag
    // 하나씩 넣어주고
    //  > 만나면 스택이 빌 때까지 pop(0)

let isTag = false;
let stack = []
let result = ''
for (let char of input){
    // tag가 아님
    if(!isTag){
        if(char === ' ' || char === '.'){
            while(stack.length>0){
                result += stack.pop()
            }
            result += " "
        }else{
            if(char === '<'){
                isTag = true;
                while(stack.length>0){
                    result += stack.pop()
                }
                
            }
            stack.push(char)
        }
        
    } //tag임
    else{
        stack.push(char)
        if(char ==='>'){
            isTag = false;
            while(stack.length>0){
                result += stack.shift()
            }
            
        }
    }
}
console.log(result)