from collections import deque
def solution(places):
    # 5*5 단위를 n번 돌아야 함
    # bfs를 X가 아닐때만 거리2까지 돌고 그 이상이면 True, 
    # 그 사이에 P가 있다면 False
    result = []
    
    def bfs(r,c,place):
        queue = deque([(r,c,0)])
        visited = [[0]*5 for _ in range(5)]
        visited[r][c] = 1
        
        while queue:
            cr, cc, cnt = queue.popleft()
            for dr, dc in [[-1,0],[1,0],[0,1],[0,-1]]:
                nr = dr + cr
                nc = dc + cc
                ncnt = cnt + 1
                # 범위 내 방문 x, X아닌거
                if (0<=nr<5 and 0<=nc<5
                    and not visited[nr][nc]
                    and place[nr][nc] != 'X'
                   ):
                    if ncnt > 2:
                        continue
                    if place[nr][nc] == 'P': #거리x
                        return False
                    queue.append((nr,nc,ncnt))
                    visited[nr][nc] = 1
        return True
                
    
    
    
    
    def check(place):
        for i in range(5):
            for j in range(5):
                if place[i][j] == 'P': #사람이면은
                    if not bfs(i,j,place): #거리 못지킨 사람 있으면
                        return False
        return True
        
    
    
    for place in places:
        # 단위별로 확인
        if check(place):
            result.append(1)
        else:
            result.append(0)
    return result
            
    
    
    
    