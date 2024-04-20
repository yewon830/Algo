function solution(citations) {
    var answer = 0;
    
    let N = Math.max(...citations);
    for(let i = N; i>=0; i--){
        let cnt = 0;
        for(let j = 0; j<citations.length; j++){
            if(citations[j] >= i){
                cnt++
            }
        }
        if(cnt>= i){
            answer = i;
            break
        }
    }
    
    return answer;
}