function round(num){
    if(num%2===0){
        return num/2
    }
    return Math.floor(num/2) + 1
}

function solution(n,a,b)
{
    var answer = 1;
    let matching = [];
    for(let i= 1;i<n;i++){
        if(i%2){
            matching.push([i,i+1])
        }
    }
    while(true){
        if(matching.find(match=>match.includes(a) && match.includes(b))){
           break
        }else{
            a = round(a);
            b = round(b);
            answer++
        }
    }    
    return answer;
}