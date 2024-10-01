from collections import deque
def solution(places):
    # 맨해튼거리 |r1 - r2| + |c1 - c2|는 2이하는 안됨
    # 파티션이면 2이하면 ㄱㅊ
    # 대기실은 5*5이므로 한 행이 대기실, 그게 열길이만큼 있다.
    
    # 계산 방법 
    # P에서 출발한다.
    # 대기실을 bfs한다. (최소거리니까), cnt를 늘린다, 그리고 X를 만나면 컨티뉴한다, 3을 넘어가도 컨티뉴한다.
    # 만약 cnt가 2이하인데, P가 있으면 바로 0을 리턴한다.
    # 리턴된게 없으면 그냥 1리턴한다.
    
    
    def bfs(i,j,room):
        queue = deque([(i,j,0)])
        visited = [[0]* 5 for _ in range(5)]
        visited[i][j] = 1
        while queue:
            cr, cc, cnt = queue.popleft()
            
            for dr,dc in [(0,-1),(0,1),(-1,0),(1,0)]:
                nr = cr + dr
                nc = cc + dc
                ncnt = cnt +1
                if 0<=nr<5 and 0<=nc<5 and not visited[nr][nc]:
                    if room[nr][nc] == 'P' and ncnt <= 2:
                        return False
                    if room[nr][nc] != 'X':
                        queue.append((nr,nc,ncnt))
                        visited[nr][nc]=1
                    if room[nr][nc] == 'X' or ncnt > 2:
                        continue
        return True
                
    
    def check(room):
        # 하나라도 False면 이 대기실은 False
        for i in range(5):
            for j in range(5):
                if room[i][j] == 'P':
                    if not bfs(i,j,room):
                        return False
        return True

    answer = []
    for i in range(5):
        #대기실 1개 단위
        if check(places[i]):
            answer.append(1)
        else:
            answer.append(0)
            
    return answer