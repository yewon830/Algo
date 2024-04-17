function solution(n) {
    var answer = 1;
    for(let i=1;i<=n/2;i++){
        let sum = 0;
        for(let j=0; j<=n-i;j++){
            sum += i+j;
            if(sum>n){
                break
            }else if(sum===n){
                answer++
                break
            }
        }
    }
    return answer;
}