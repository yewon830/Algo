function solution(k, tangerine) {
    var answer = 0;
    //개수가 제일 많은 귤 먼저 담기
    let cnt = {};
    for(let i = 0; i<tangerine.length; i++){
        if(tangerine[i] in cnt){
            cnt[tangerine[i]]++
        }else{
            cnt[tangerine[i]] = 1
        }
    }
    
    //뭐가 맣이 들어가는지 종류를 알 필요는 없음
    const kgArr = Object.values(cnt).sort((a,b)=>b-a)
    for(let i=0; i<kgArr.length;i++){
        if(k<=0){
            break
        }else{
            k -= kgArr[i]
            answer++
        }
    }
    
    return answer;
}