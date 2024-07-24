import sys
from collections import deque
# N*N, 승객 M명
# 비어있거나 벽이 놓여있다. (최단경로로 이동)
#가장 가까운 승객 태워서, 최단거리로 이동
    # 만약 거리가 같으면, 행 번호가 작은 -> 열 번호가 작은 순으로 .
#택시와 승객이 같이 있을 수 있음(0)
# 연료는 1만큼 소모, 경로에 소모된 2배 채움.
# 모든 승객을 못데려다주면 -1, 데려다 줄 수 있으면 남는 연료 양.
# 연료는 초기보다 과충천 가능.
# 0은 빈칸, 1은 벽. 

###
#풀이 생각 
# 최단거리를 계산해서 이동 (bfs)
# 연료가 떨어질 떄까지 승객 목적지로  (bfs)


#출발-목적을 해시로
input = sys.stdin.readline
n, m, fuel = map(int,input().split())
board = [list(map(int,input().split())) for _ in range(n)]
start_r, start_c = map(int,input().split())
start_r -= 1
start_c -= 1
passenger = {}
answer= 0
for i in range(m):
    pr,pc, pdr, pcr = map(int,input().split())
    passenger[(pr-1,pc-1)] = (pdr-1,pcr-1)
#인덱스라서 1씩 빼줘야

def find_p(start_r,start_c):
    queue = deque([(start_r,start_c, 0)])
    visited = [[0]*n for _ in range(n)]
    visited[start_r][start_c] = 1
    candidate = []
    min_cnt = 0xffff
    
    while queue:
        cr, cc, cnt = queue.popleft()
        #더이상 승객 볼 필요 x
        if cnt > min_cnt:
            break
        # 승객 도착(최소거리)
        if (cr,cc) in passenger:
            candidate.append((cr,cc))
            min_cnt = cnt
        for dr, dc in [[-1,0],[1,0],[0,1],[0,-1]]:
            nr = dr+ cr
            nc = dc + cc
            #범위 내고 방문 안했고 빈칸이면
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc] and not board[nr][nc]:
                queue.append((nr,nc,cnt+1))
                visited[nr][nc] = 1
    return candidate, min_cnt

def go_dest(start_r,start_c):
    # 최소거리로 목적지까지 이동
    pdr, pdc = passenger[(start_r,start_c)]
    del passenger[(start_r,start_c)]
    queue = deque([(start_r,start_c,0)])
    visited = [[0]*n for _ in range(n)]
    visited[start_r][start_c] = 1
    
    while queue:
        cr, cc, cnt = queue.popleft()
        if cr == pdr and cc == pdc:
            #도착
            return cr,cc,cnt 
        for dr, dc in [[-1,0],[1,0],[0,1],[0,-1]]:
            nr = dr+ cr
            nc = dc + cc
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc] and not board[nr][nc]:
                queue.append((nr,nc,cnt+1))
                visited[nr][nc] = 1
    #목적지에 도착 못함
    return pdr, pdc, 1000000

while fuel > 0 and len(passenger) > 0:
    candidate, used_fuel = find_p(start_r, start_c)
    #최단거리로 이동했는데 연료 부족
    if(used_fuel > fuel or len(candidate) == 0):
        answer = -1
        break
    start_r,start_c = sorted(candidate)[0]
    fuel -= used_fuel
    start_r, start_c, used_fuel = go_dest(start_r, start_c)
    #도착을 못했거나, 연료 오바된 경우
    if used_fuel > fuel:
        answer = -1
        break
    fuel += used_fuel #2배 더해주면 안됨...!
    
if answer == -1:
    print(-1)
else: 
    print(fuel)
    

        
        
                
