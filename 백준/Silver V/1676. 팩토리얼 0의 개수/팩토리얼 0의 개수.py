

N = int(input())
dp = [0]*(N+1)
cnt = 0
dp[0] = 1
if N >=1 :
    dp[1] = 1
    for i in range(2,N+1):
        dp[i] = dp[i-1] * i
    target = list(str(dp[N]))
    for i in range(len(target)-1,-1,-1):
        if target[i] == '0':
           cnt += 1
        if target[i] != '0':
            break
print(cnt)

