function solution(s) {
    let str = s; 
    let stringLength = 0;
    let [changeCnt, zeroCnt] =[0,0];
    // 0 제거한 길이
    while(true){
        let answer = '';
        for(let i=0; i<str.length;i++){
            if(str[i]==='1'){
                stringLength += 1
            }else{
                zeroCnt += 1
            }
        }
        for(let i = 18; i>=0; i--){
            if(stringLength >= (2**i)){
                stringLength -= 2**i
                answer += '1';
            }else{
                if(answer.includes('1'))
                   answer += '0';
            }
        }
        changeCnt += 1;
        str = answer

        if(str === '1'){
            break
        }
    }

    return [changeCnt, zeroCnt];
    }
    
    
