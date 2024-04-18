function solution(brown, yellow) {
    var answer = [];
    //갈색이 노란색을 둘러싸고 있음.
    //에라토스테네스 체
    for(let i=1; i<=Math.sqrt(yellow);i++){
        if(yellow % i === 0){
            let width = Math.max(i, yellow/i);
            let height = yellow/width;
            if(brown + yellow === (width+2)*(height+2)){
                answer[0] = width+2;
                answer[1] = height+2;
            }
        }
    }
    return answer;
    
}