
function solution(brown, yellow) {
    var answer = [];
    //전체 가로세로-2를 해서 그 넓이가 yellow면은 답 
    //i는 세로 길이, 가로 길이보다 더 커지는 순간 제외
    for(let i=3; i<=(brown+yellow)/i;i++){
        if((brown+yellow)%i===0){
            let width = (brown+yellow)/i;
            if((width-2)*(i-2)===yellow){
                answer[0] = width;
                answer[1] = i
            }
        }

    }

    return answer;
}