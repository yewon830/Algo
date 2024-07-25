
import sys
from collections import deque
from itertools import combinations

# 연구소는 크기가 N*M
# 벽은 3개
# 바이러스 2 벽 1 빈칸 0

# 벽을 3개 세우는 조합을 찾고, 바이러스를 퍼트리기.;
input = sys.stdin.readline
n, m = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]


empty, virus = [],[]
for i in range(n):
    for j in range(m):
        if board[i][j] == 0:
            empty.append((i,j))
        elif board[i][j] == 2:
            virus.append((i,j))

max_cnt = 0            
def bfs():
    global max_cnt
    queue = deque(virus)
    tmp = [board[i][:] for i in range(n)]
    
    while queue:
        cr, cc= queue.popleft()
        for dr, dc in [[0,-1],[0,1],[1,0],[-1,0]]:
            nr = dr + cr
            nc = dc + cc
            # 범위 내의, 0인거
            if 0<= nr< n and 0<= nc <m and tmp[nr][nc] == 0:
                tmp[nr][nc] = 2
                queue.append((nr,nc))
    cnt = 0
    for i in range(n):
        for j in range(m):
            if tmp[i][j] == 0:
                cnt += 1
    if max_cnt < cnt:
        max_cnt = cnt

for walls in combinations(empty,3):
    row = []
    col = []
    for r,c in walls:
        row.append(r)
        col.append(c)
    for i in range(3):
        board[row[i]][col[i]] = 1 #벽세우기
    bfs()
    for i in range(3):
        board[row[i]][col[i]] = 0
print(max_cnt)