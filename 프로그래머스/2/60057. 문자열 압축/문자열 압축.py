import sys
def solution(s):
    # 압축 단위를 늘려가면서 슬라이싱
    # 슬라이싱 했을 때 연속하면 cnt 증가
    # 연속하지 않는다면 cnt = 1로 갱신, 압축 문자열 추가(1은 따로)
    if len(s)==1:
        return 1
    max_cnt = sys.maxsize
    for i in range(1, len(s)//2 +1): #압축 단위
        # 첫 시작점
        cnt = 1
        tmp = s[:i] 
        compressed = ''
        for j in range(i,len(s),i):
            new_s = s[j:j+i]
            if new_s == tmp:
                cnt += 1
            else: #다른 문자열
                if cnt >1:
                    compressed += str(cnt) + tmp
                    cnt = 1
                else:
                    compressed += tmp
                tmp = new_s
        #마지막 다 돌았을 때 문자열을 추가
        if cnt >1 :
            compressed += str(cnt) + tmp
        else:
            compressed += tmp
        

        # 이 시점에서 문자열 완성
        if len(compressed) < max_cnt:
            max_cnt = len(compressed)
        
    return max_cnt