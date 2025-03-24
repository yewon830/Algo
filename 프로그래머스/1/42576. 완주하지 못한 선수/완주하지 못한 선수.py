from collections import defaultdict

def solution(participant, completion):
    # 둘다 딕셔너리로 만들고 이름 + 숫자로 만든 다음에
    # 같은 이름 찾아서 참가자 - 완주자 했을 때 1이 남는 거 
    # 혹은 이름이 완주자에 없는 거
    answer = ''
    dict_c = defaultdict(list)
    dict_p = defaultdict(list)
    
    for i in range(len(completion)):
        cnt = 1
        if completion[i] in dict_c :
            cnt = dict_c[completion[i]] + 1
        dict_c[completion[i]] = cnt
    
    for i in range(len(participant)):
        cnt = 1
        if participant[i] in dict_p:
            cnt = dict_p[participant[i]] + 1
        dict_p[participant[i]] = cnt
    
    for p in participant:
        if p not in dict_c:
            answer = p
            break
        if p in dict_c and dict_p[p] > dict_c[p]:
            answer = p
    
            
    return answer