def solution(k, tangerine):
    dict1 = {}
    ans = 0
    for i in tangerine:
        if i in dict1:
            dict1[i] += 1
        else:
            dict1[i] = 1
    lst1 = sorted(dict1.items(), key = lambda x : x[1], reverse = True)
    for i in range(len(lst1)):
        if k <=0:
            break
        else:
            k -= lst1[i][1]
            ans += 1
    return ans