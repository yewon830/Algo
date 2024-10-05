function solution(clothes) {
    //객체 만들어서 {의상종류: 의상 수}로 만들고
    //(M+1)(N+1)한다음 -1한거 제출
    
    let answer = 1;
    let clothesObj = {}
    for (let [a,b] of clothes){
        if(clothesObj[b] === undefined){
            clothesObj[b] = 0
        }
        clothesObj[b]++
        
    }
    for (let e in clothesObj){
        answer *= (clothesObj[e]+1)
    }
    return answer-1;
}