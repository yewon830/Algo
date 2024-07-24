import sys
from collections import deque
from itertools import combinations

input = sys.stdin.readline
n, m = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]
# 연구소 N*N이고 M이 활성 바이러스 개수

#  board 변환, 바이러스 좌표 찾기
virus = []
for i in range(n):
    for j in range(n):
        if board[i][j] == 1:
            board[i][j] = '-'
        elif board[i][j] == 2:
            board[i][j] = '*'
            virus.append([i,j])

answer = set() # 최소 시간

def bfs(cnt):
    global answer
    max_cnt= 0; # 다 채우고 난 1경우 당 바이러스 최대 시간
    # board복사해서, 바이러스퍼트리기
    queue = deque()
    tmp = [board[i][:] for i in range(n)]
    for i in range(n):
        for j in range(n):
            if tmp[i][j] == '.':
                queue.append((i,j,cnt))

    while queue:
        cr, cc, ccnt = queue.popleft()
        if not board[cr][cc] and max_cnt < ccnt:
            max_cnt = ccnt
        for dr,dc in [[-1,0],[1,0],[0,1],[0,-1]]:
            nr = dr+cr
            nc = dc + cc
            # 보드 복사한 tmp가 0이면(빈칸) 퍼트리기
            if 0<=nr<n and 0<=nc<n and (not tmp[nr][nc] or tmp[nr][nc]== '*'):
                tmp[nr][nc] = ccnt + 1
                queue.append((nr,nc,ccnt+1))
                
    # for i in tmp:
    #     print(i)
    # print('------------')            
                
    for i in range(n):
        for j in range(n):
            if tmp[i][j] == 0:
                max_cnt = -1
    answer.add(max_cnt)

# 바이러스 활성 가능한 조합
for active_v in combinations(virus,m):
    row = []
    col = []
    # for r,c in active_v:
    #     row.append(r)
    #     col.append(c)
    #     print(row, col)
    # 바이러스 n개 활성화, 임의로 '.'으로 표시
    for i in range(m):
        board[active_v[i][0]][active_v[i][1]] = '.'
    #활성화된 바이러스 움직이기
    bfs(0)
    for i in range(m):
        board[active_v[i][0]][active_v[i][1]] = '*' #다시 비활성화


if not answer:
    print(0)

elif answer == {-1}:
    print(-1)
else:
    answer.discard(-1)
    print(min(answer))
        

