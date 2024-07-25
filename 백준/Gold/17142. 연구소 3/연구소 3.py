
import sys
from collections import deque
from itertools import combinations

input = sys.stdin.readline
#n*n
#활성 . 비활성 * 벽 -
# 바이러스 최소 시간. 못 채우면 -1
n, m = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]

virus = []
for i in range(n):
    for j in range(n):
        if board[i][j] == 1:
            board[i][j] = '-'
        elif board[i][j] == 2:
            board[i][j] = '*'
            virus.append((i,j))
answer = set()
def bfs():
    queue= deque()
    max_cnt = 0
    tmp = [board[i][:] for i in range(n)]
    for i in range(n):
        for j in range(n):
            if tmp[i][j] == '.':
                queue.append((i,j,0))
    
    while queue:
        cr,cc, cnt = queue.popleft()
        if board[cr][cc] == 0 and cnt > max_cnt:
            max_cnt = cnt
        for dr,dc in [[-1,0],[1,0],[0,1],[0,-1]]:
            nr = cr + dr
            nc = cc + dc
            if 0<=nr<n and 0<=nc<n and (tmp[nr][nc]==0 or tmp[nr][nc]=='*'):
                tmp[nr][nc] = cnt + 1
                queue.append((nr,nc, cnt+1))
    for i in range(n):
        for j in range(n):
            if tmp[i][j] == 0: #빈칸남음
                max_cnt = -1
                break
    answer.add(max_cnt)
    

for active_virus in combinations(virus, m):
    row = []
    col = []
    for r,c in active_virus:
        row.append(r)
        col.append(c)
    for i in range(m):
        board[row[i]][col[i]] = '.' #활성 바이러스
    bfs()
    for i in range(m):
        board[row[i]][col[i]] = '*'

if answer == {-1}:
    print(-1)
else:
    answer.discard(-1)
    print(min(answer))
            