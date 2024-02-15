# 소수 구하는 법: 나눌 수 있는 수가 1이랑 지밖에 없어야 함.

# 1에서부터 자기자신 전까지 돌면서 만약에 1밖에 나눠 떨어지는게 없다면? >> sosu

N, M = map(int,input().split())

for i in range(N,M+1):
    if i == 1:
        continue
    for j in range(2,int(i**0.5)+1):
        if not (i % j):
            break
    else:
        print(i)