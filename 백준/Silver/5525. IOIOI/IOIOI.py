N = int(input()) #Pn
M = int(input()) #문자열 길이
S = input()
#일단 Pn이 뭔지 알고
# 문자열을 돌면서 문자열에 이게 몇 번 나오는지 카운트 증가.
P = ''
# 만약 N이 1이면 P길이는 3(1+1 + 1)
for i in range(2*N+1):
    # 짝수면 I
    if i % 2 == 0:
        P += 'I'
    else:
        P += 'O'
j = 0
cnt = 0
for i in range(M-(len(P)-1)):
#     슬라이싱을 활용할 수 있을 것 같다.
    if S[i:i+len(P)] == P:
        cnt += 1
print(cnt)


