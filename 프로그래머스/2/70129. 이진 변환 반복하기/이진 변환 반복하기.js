function solution(s) {
    let answer = [0,0];
    while(s !== '1'){
        answer[1] += (s.match(/0/g)||[]).length;
        answer[0]++
        s = s.replace(/0/g,'').length.toString(2);
    }
    return answer
}