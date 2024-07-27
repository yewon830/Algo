
def solution(relation):
    n = len(relation)
    m = len(relation [0])
    
    result = []
    def comb(start,depth, max_dep, curr, result_comb):
        if depth == max_dep:
            result_comb.append(curr[:])
            return
        for i in range(start, m):
            curr.append(i)
            comb(i+1, depth+1, max_dep, curr, result_comb)
            curr.pop()
    
    for length in range(1, m+1):
        combination = []
        comb(0,0,length,[],combination)
        for cols in combination: #조합 살펴보기
            Ismin = True
            row_set = set()
            
            # 최소성 검사
            # key가 부분집합이면 안됨
            for key in result:
                if set(key).issubset(set(cols)):
                    Ismin = False
                    break
            #밑에거 하지말고 다른 조합 후보키 검사
            if not Ismin:
                continue
                
            #유일성 검사(row 속성이 중복되면 x)
            for r in relation:
                row_str = ""
                for c in cols:
                    row_str += " " + r[c]
                row_set.add(row_str)
            if len(row_set) == n:
                result.append(cols)
    return len(result)
                
                
            
    
    
    
    
    
    
    
    