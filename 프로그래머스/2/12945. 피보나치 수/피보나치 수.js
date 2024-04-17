function fibo(n){
    let dp = [];
    dp[0] = 0n;
    dp[1] = 1n;
    for(let i = 2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
}

function solution(n) {
    var answer = '';
    let fiboRes = fibo(n);
    answer = fiboRes % BigInt(1234567);
    return Number(answer.toString());
}