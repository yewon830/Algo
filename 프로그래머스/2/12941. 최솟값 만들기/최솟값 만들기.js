function solution(A,B){
    var answer = 0;
    //하나씩 뽑아서 두 수 곱함. (배열 length 만큼 반복)
    // 곱한 값 누적 -> 최소 (다시 사용 x)
    
    //배열 길이가 같으므로, A는 오름차순 정렬, B는 내림차순 정렬하고
    //각 곱하고 더함
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    for(let i=0;i<A.length;i++){
        answer += A[i] * B[i]
    }
    
    return answer;
}