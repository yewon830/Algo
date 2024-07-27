from collections import deque

def solution(n, computers):
    # n은 컴퓨터 개수, 전체 네트워크 개수를 return
    visited = [0]*n
    
    def bfs(i):
        queue = deque([i])
        visited[i] = 1
        while queue:
            cur = queue.popleft()
            for j in range(n):
                if not visited[j] and computers[cur][j] == 1:
                    queue.append(j)
                    visited[j] = 1
    
    answer = 0
    for i in range(n):
        if not visited[i]:
            bfs(i)
            answer += 1
    
    return answer