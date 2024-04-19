function round(num){
    if(num%2n===0n){
        return num/2n
    }
    return num/2n + 1n
}

function solution(n,a,b)
{
    var answer = 1;
    let matching = [];
    n = BigInt(n)
    a = BigInt(a)
    b = BigInt(b)
    for(let i= 1n;i<n;i++){
        if(i%2n){
            matching.push([i,i+1n])
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
        console.log(a,b)
    }    
    return answer;
}