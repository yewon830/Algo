import sys

from collections import deque
# 세로 n 가로 m 
# 공 기울이기 == 벽 끝까지
# 파란 구슬은 빠지면 안된다

input = sys.stdin.readline
n, m = map(int,input().split())
board = [input().rstrip() for _ in range(n)]

#공 위치
queue = deque()
visited = set()
for i in range(n):
    for j in range(m):
        if board[i][j] == 'B':
            br,bc = i,j
        elif board[i][j] == 'R':
            rr,rc = i,j
queue.append((rr,rc,br,bc,1))
visited.add((rr,rc,br,bc))

def move(r,c,dr,dc):
    cnt = 0
    while board[r+dr][c+dc] != '#' and board[r][c] != 'O':
        r += dr
        c += dc
        cnt += 1
    return r,c,cnt

answer= 0
while queue:
    cur_rr, cur_rc, cur_br, cur_bc, cnt = queue.popleft()
    if cnt >10:
        break
    for dr, dc in [[-1,0],[1,0],[0,1],[0,-1]]:
        next_rr, next_rc, rcnt = move(cur_rr,cur_rc,dr,dc)
        next_br, next_bc, bcnt = move(cur_br,cur_bc,dr,dc)
        if (next_rr,next_rc,next_br,next_bc) in visited:
            continue
        if board[next_br][next_bc] == 'O':
            continue
        if board[next_rr][next_rc] == 'O':
            answer= 1
            break
        if next_rr == next_br and next_rc == next_bc:
            if rcnt < bcnt:
                next_br -= dr
                next_bc -= dc
            else:
                next_rr -= dr
                next_rc -= dc
        queue.append((next_rr, next_rc,next_br, next_bc,cnt+1))
        visited.add((next_rr, next_rc,next_br, next_bc))
    else:
        continue
    break
print(answer)
            
