N = int(input())
numList = list(map(int,input().split()))

numList.sort()
for i in range(1,N):
    numList[i] += numList[i-1]
print(sum(numList))
