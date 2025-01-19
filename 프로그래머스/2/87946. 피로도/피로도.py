
def solution(k, dungeons):
    #최소 필요 피로도, 소모 피로도 존재
    #유저가 탐험할 수 있는 최대 던전 수.
    # 다 돌아보고 cnt 제일 큰거
    result = 0
    visited = [0]*len(dungeons)
    def backTracking(cnt, k):
        nonlocal result
        if cnt > result :
            result = cnt
        
        for i in range(len(dungeons)):
            if dungeons[i][0] <= k and not visited[i]:
                visited[i] = 1
                backTracking(cnt+1, k-dungeons[i][1])
                visited[i] = 0

    backTracking(0,k)
    
    return result
                
            
        
