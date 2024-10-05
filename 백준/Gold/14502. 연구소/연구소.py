import sys
from itertools import combinations
from collections import deque
input = sys.stdin.readline
n, m = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]

# 벽 세우기
# 0은 빈칸, 1은 벽, 2는 바이러스. 
# 벽을 3개 세운 뒤, 
# 바이러스를 퍼트리고(BFS)
# 0인 영역의 최댓갑 구하기

# 벽 3개 세우기
# 0인 곳의 좌표를 만들어서, 임의로 3개의 벽을 만든다(완전탐색, 조합)
empty = []
virus = []
answer = 0
for i in range(n):
    for j in range(m):
        if board[i][j] == 0:
            empty.append((i,j))
        elif board[i][j] == 2:
            virus.append((i,j))
            
def bfs(board):
    queue = deque(virus)
    temp = [board[i][:] for i in range(n)]
    global answer
    
    while queue:
        cr,cc = queue.popleft()
        for dr, dc in [[0,1],[0,-1],[1,0],[-1,0]]:
            nr = dr + cr
            nc = dc + cc
            if 0<=nr<n and 0<= nc<m and temp[nr][nc] == 0:
                temp[nr][nc] = 2
                queue.append((nr,nc))
    #0 개수 세기
    cnt = 0
    for i in range(n):
        for j in range(m):
            if temp[i][j] == 0:
                cnt += 1
    if answer < cnt:
        
        answer = cnt
    return

# 3개의 벽 만들기

for comb in combinations(empty,3):
    for i in range(3):
        board[comb[i][0]][comb[i][1]] = 1 # 벽세우기
    # print(board)
    bfs(board)#바이러스 퍼트리기
    for i in range(3):
        board[comb[i][0]][comb[i][1]] = 0 #원상태로 돌리기

print(answer)