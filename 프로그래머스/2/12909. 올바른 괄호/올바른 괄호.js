function solution(s){
    // 올바른 괄호 계산하기 : 스택
    // 계산하는 법 [는 더하고, ]는 뺸다. 만약 0이면 ture, 아니면 false -> 시간초과
    //이떄, 만약 배열이 0인데 ]면 바로 flase
    let cnt = 0
    for (let i = 0; i<s.length; i++){
        if(cnt <0 ){
            break
        }
        if(s[i]==='('){
            cnt += 1
        }else{
            cnt -= 1
        }
    }
    return cnt===0;
}