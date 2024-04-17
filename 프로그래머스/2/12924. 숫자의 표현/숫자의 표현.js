function solution(n) {
    var answer = 0;
    //연속하는 자연수로 n을 표현하라(자기자신 포함)
    // i에서 1에서부터 for문을 돌면서 n까지 간다(시작점)
    //for문을 한개 더 돌면서 0에서 n-i까지 돌아서 하나씩 더한다.
    //이 총합이 n이되면 answer+1하고 break
    for(let i=1;i<=n;i++){
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