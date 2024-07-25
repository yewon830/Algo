from collections import deque

def solution(queue1, queue2):
    # 각 큐합을 반으로 만들어야 함 작업 최소 횟수는 3n
    queue1, queue2 = deque(queue1), deque(queue2)

    n = len(queue1)
    sum1 = sum(queue1)
    sum2 = sum(queue2)
    cnt = 0
    for i in range(3*n):
        #더 큰 거를 다른 쪽으로
        if sum1 == sum2:
            return cnt
        if sum1 < sum2:
            num = queue2.popleft()
            queue1.append(num)
            sum1 += num
            sum2 -= num
            cnt += 1
        else:
            num = queue1.popleft()
            queue2.append(num)
            sum1 -= num
            sum2 += num
            cnt += 1
    return -1