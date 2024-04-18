function solution(n, words) {
    var answer = [];
    let stack = [];
    let gameover = false;
    for(let i=0; i<words.length;i++){
        if(stack.length===0){
            stack.push(words[i])
            continue
        }
        let top = stack[stack.length-1]
        
        if(top[top.length-1]===words[i][0] && !stack.includes(words[i])){
            stack.push(words[i])   
        }else{
            gameover = true;
            answer[0] = (i%n) + 1
            answer[1] = Math.floor(i/n) + 1
            break
        }
    }
    if(!gameover){answer = [0,0]}
    return answer
}