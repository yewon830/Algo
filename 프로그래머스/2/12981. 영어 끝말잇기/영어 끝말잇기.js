function solution(n, words) {
    var answer = [];
    let stack = [words[0]];
    let gameover = false;
    for(let i=1; i<words.length;i++){
        let top = stack[stack.length-1]
        if(top[top.length-1]!==words[i][0] || stack.includes(words[i])){
            gameover = true;
            answer[0] = (i%n) + 1
            answer[1] = Math.floor(i/n) + 1
            break
        }
        stack.push(words[i])
    }
    if(!gameover){answer = [0,0]}
    return answer
}