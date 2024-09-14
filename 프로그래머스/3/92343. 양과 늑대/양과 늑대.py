def solution(info, edges):
    #해당 노드를 가면 양, 늑대를 모을 수 있음
    # 양 > 늑대이면 양 보존 가능
    # 양<늑대이면 모든 양 x
    # 부모 노드는 방문했는데 자식 노드는 방문 안한 것을 가야함.
    # 완전탐색으로 모든 경우의 수를 살핀다.
    visited = [0]*len(info)
    answer= 0
    visited[0] = 1  
    def backTracking(sheep,wolf):
        #양<늑대
        nonlocal answer
        if wolf >= sheep:
            return
        if answer < sheep:
            answer = sheep
            
        
        for p,c in edges:
            if visited[p] and not visited[c]:
                visited[c] = 1
                if info[c] == 0: #양이면
                    backTracking(sheep+1, wolf)
                else:
                    backTracking(sheep,wolf+1)
                visited[c] = 0
    
    backTracking(1,0)
    
    return answer
    