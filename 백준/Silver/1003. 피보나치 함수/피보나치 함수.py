T = int(input())
for tc in range(T):
    N = int(input())
    # 재귀를 쓰면 시간초과가 나기 때문에  dp이용.
    # 0과 1을 쓴 기록이 전부 남아있도록 문자열을 이용하여, 개수를 센다. ->이렇게 하면 메모리 초과가 됨
    # 대신, dp에 더한 값을 넣지않고 0과 1의 카운트 갯수를 넣는다.
    dp = [0] * (N+1)
    dp[0] = (1,0)
    if N >= 1:
        dp[1] = (0,1)
    if N>=2 :
        for i in range(2,N+1):
            dp[i] = (dp[i-2][0]+dp[i-1][0], dp[i-2][1]+dp[i-1][1])
    print(dp[N][0], dp[N][1])
