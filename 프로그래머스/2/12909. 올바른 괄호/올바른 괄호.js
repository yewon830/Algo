//맞는 코드

function solution(s){
    let answer = true;
    let cnt = 0;
    for (let i = 0; i< s.length; i++){
        if(cnt<0){
            return false;
        }
        if(s[i] ==='('){
            cnt += 1
        }else{
            cnt -= 1
        }
    }
    return cnt===0;
}