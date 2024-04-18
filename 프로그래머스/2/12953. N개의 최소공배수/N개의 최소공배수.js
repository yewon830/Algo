function gcd(a,b){
    //a를 b로 나눈 나머지
    //0이 되면 b
    let r = a % b
    return r===0? b:gcd(b,r)
}
function solution(arr){
    let answer = arr.reduce((a,b)=> (a*b) / gcd(a,b))
    return answer
}