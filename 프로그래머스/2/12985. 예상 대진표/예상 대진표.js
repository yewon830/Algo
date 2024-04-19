function solution(n,a,b)
{
    var answer = 0;
    //12-34-56... 등등 a,b를 /2해서 올림한 결과가 같으면 만났다는 뜻.
    while(a!==b){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++
    }
    return answer;
}