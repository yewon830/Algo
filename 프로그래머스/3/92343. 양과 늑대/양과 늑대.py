def solution(info, edges):
    # 백트래킹
    # 백트래킹인데, 뒤로 돌아갈 수 있다. 부모는 방문했는데, 자식은 방문안했다면 방문 가능
    
    answer= 0
    visited = [0]* len(info)
    visited[0] = 1
    def backTracking(sheep,wolf):
        nonlocal answer
        if sheep > wolf:
            if sheep > answer:
                answer = sheep
        else:
            return
        for p,c in edges:
            if visited[p] == 1 and not visited[c]:
                visited[c] = 1
                if info[c] == 0:
                    backTracking(sheep+1, wolf)
                else:
                    backTracking(sheep,wolf+1)
                visited[c] = 0
    backTracking(1,0)
    return answer
            
        
        
        