function solution(n) {
    var answer = 0;
    // n보다 크고 + 2진수 변환 후에 1의 개수가 같은 수(중에 제일 작음)
    // n을 이진변환한다. 정규식으로 length를 찾는다.
    // for문을 n+1에서 범위끝까지 돌면서, 2진수로 변환했을 때 1의개수가 같다면 break하고
    //그 숫자를 answer에 출력
    
    for(let i=n+1; i<=1000000; i++){
        if(i.toString(2).match(/1/g).length === n.toString(2).match(/1/g).length){
            answer = i;
            break
        }
    }
    
    return answer;
}