function solution(n)
{   
    let ans = 0; 
    //추측 방법 : 몫이 0이 될때까지 n을 2로 나눈다
    //2로 안나눠지면 -1을 하고 나눈다(점프이므로 ans+1)
    while(n !== 0){
        if(n%2===0){
            n = n/2
        }else{
            ans++
            n -= 1
            n = n/2
        }
    }

    return ans;
}