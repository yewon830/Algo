# 최소->최대 정렬

N = int(input())
P = sorted(list(map(int, input().split())))

# 누적합.
for i in range(1,N):
    P[i] += P[i-1]

print(sum(P))