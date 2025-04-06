def solution(nums):
    # N/2마리만 가짐
    # 조합 31 32 12 33
    # 셋 길이가 cnt보다 작으면 셋 길이 출력
    # 아니면 cnt 출력 
    
    cnt = len(nums)/2
    set_nums = set(nums)
    if len(set_nums) < cnt:
        return len(set_nums)
    else:
        return cnt
