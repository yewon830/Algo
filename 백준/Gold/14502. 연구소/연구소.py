from itertools import combinations
from collections import deque
import sys
input = sys.stdin.readline
#✅ 입력 형식에 맞춰 입력값을 받는다.
n, m = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]
max_cnt = 0

# 벽 조합 찾기
empty = []
for i in range(n):
    for j in range(m):
        if board[i][j] == 0:
            empty.append([i,j])

def bfs(): #바이러스 퍼트리기
    queue = deque()
    tmp = [board[i][:] for i in range(n)]  # board의 복사본 생성

    for i in range(n):
        for j in range(m):
            if board[i][j] == 2:
                queue.append((i, j))  # 바이러스 위치를 큐에 추가

    while queue:
        ci, cj = queue.popleft()
        for di, dj in [(-1, 0), (1, 0), (0, 1), (0, -1)]:
            ni, nj = ci + di, cj + dj
            # 범위 내이고 0이고 방문안했다면 퍼트리기
            if 0 <= ni < n and 0 <= nj < m and tmp[ni][nj] == 0:
                tmp[ni][nj] = 2
                queue.append((ni, nj))
    #cnt 크기 찾기
    cnt = 0
    for r in range(n):
        for c in range(m):
            if tmp[r][c] == 0:
                cnt += 1
    global max_cnt
    if cnt > max_cnt:
        max_cnt = cnt
    return
             
# 모든 벽을 세울 수 있는 조합을 만든다
# 벽을 세운 뒤에 2가 있는 지점을 찾아서 바이러스를 퍼트린다(bfs) 근데 실제 board를 변형하면 안되고
# 
# cboard 돌면서 0개수 세기.
# max_cnt 갱신



# 벽 세우기 (모든 조합을 찾아서 )
for new_wall in combinations(empty,3):
    row = []
    col = []
    for r, c in new_wall:
        row.append(r)
        col.append(c)
        if board[r][c] !=0:
            break
    else:
        for i in range(3):
            board[row[i]][col[i]] = 1
        bfs()
        for i in range(3):
            board[row[i]][col[i]] =0
print(max_cnt)
