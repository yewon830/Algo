function solution(citations) {
    let h = 0;
    
    //h+1 논문 갯수
    citations.sort((a,b)=>b-a);
    while(h+1<=citations[h]){h++}
    
    return h;
}