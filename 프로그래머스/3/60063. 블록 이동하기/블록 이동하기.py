from collections import deque
def solution(board):
    # n*n
    # 로봇이 2*1이고, 회전가능
    # 1부터 인덳스가 시작함
    n = len(board)
    new_board = [[1]*(n+2) for _ in range(n+2)]
    for i in range(n):
        for j in range(n):
            new_board[i+1][j+1] = board[i][j] 
    def move(cur_position):
        next_position = []
        p = list(cur_position)
        lr,lc,rr,rc = p[0][0], p[0][1], p[1][0], p[1][1]
        for dr,dc in [[-1,0],[1,0],[0,1],[0,-1]]:
            nlr, nlc = lr + dr, lc +dc
            nrr, nrc = rr + dr, rc + dc
            if new_board[nlr][nlc] == 0 and new_board[nrr][nrc] == 0:
                next_position.append([(nlr,nlc),(nrr,nrc)])
        if lr == rr: #가로
            for i in [-1,1]:
                if new_board[lr+i][lc] == 0 and new_board[rr+i][rc]==0:
                    next_position.append([(lr,lc),(lr+i, lc)])
                    next_position.append([(rr,rc),(rr+i, rc)])
        if lc == rc:
            for i in [-1,1]:
                if new_board[lr][lc+i] == 0 and new_board[rr][rc+i] == 0:
                    next_position.append([(lr,lc),(lr,lc+i)])
                    next_position.append([(rr,rc),(rr,rc+i)])
        return next_position
        
        
    # 갈 수 있는 방법
    position = [(1,1),(1,2)]
    queue = deque()
    queue.append((position,0)) #횟수
    visited = set()
    visited.add(frozenset(position))#set을 hash로 만듦
    while queue:
        cur_position, cnt = queue.popleft()
        if (n,n) in cur_position:
            return cnt
        for next_position in move(cur_position):
            if frozenset(next_position) not in visited:
                queue.append((frozenset(next_position), cnt+1))
                visited.add(frozenset(next_position))
        