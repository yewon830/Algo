from collections import deque
def solution(places):
    answer = []
    #p면은
    #bfs를 2칸까지 도는 데, 방문 안했고 + 범위 내고 + X가 아닐때만 돈다
    #만약 안에 P가 있으면 바로 False
    #cnt가 2를 넘으면 바로 True
    
    def bfs(r,c, place):
        queue = deque()
        queue.append((r,c,0))
        visited = [[0]*5 for _ in range(5)] 
        visited[r][c] = 1
        while queue:
            cr, cc, cnt = queue.popleft()
            if cnt > 1:
                return True
            for dr, dc in [[-1,0],[1,0],[0,-1],[0,1]]:
                nr = cr + dr
                nc = cc + dc
                if (0<= nr < 5 and 0<=nc<5 
                    and not visited[nr][nc] 
                    and place[nr][nc] != 'X'):
                    if place[nr][nc] == 'P':
                        return False
                    queue.append((nr,nc,cnt+1))
                    visited[nr][nc] = 1 
        return True
            
    
    
    # 배열이 3중
    #한 칸씩 검증
    def check(place):
        for i in range(5):
            for j in range(5):
                if place[i][j] == 'P':
                    if not bfs(i,j, place): #만약 거리두가 안된게 있으면
                        return False
        return True
                        
        
    for place in places:
        if check(place):
            answer.append(1)
        else:
            answer.append(0)
            
    return answer