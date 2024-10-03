from collections import defaultdict
from itertools import combinations
def solution(clothes):
    
    # 추가로 옷 입은 것도 서로 다른 방법으로 인정.
    # 서로 다른 조합의 수. 
    # {종류 : 의상 개수} 이렇게 해시맵을 만든다
    clothes_dict = defaultdict(list)
    for e in clothes:
        if not clothes_dict[e[-1]]:
            clothes_dict[e[-1]] = 0
        clothes_dict[e[-1]] += 1
    #각 종류별로 0개 혹은 1개를 꺼내야 함.
    answer = 1
    for key in clothes_dict:
        answer *= (clothes_dict[key] +1)
    
    return answer - 1