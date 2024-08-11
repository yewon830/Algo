def solution(today, terms, privacies):
    # 개인정보는 1-n까지
    # 약관마다 개인정보 보관 유효기간이 정해져 있음
    # 모든 달은 28일이라고 가정. 보관 가능은 7월 1일이면 7월 1일 날 파기
    # 오늘 날짜로 파기해야 할 개인정보 번호
    
    # 숫자 계산을 해야해서 int로 바꿔야 할듯..
    
    #.을 기준으로 년,월,일 저장
    # terms를 나눠서 A;6이렇게 해시로 저장
    # privacies를 돌면서, 날짜/약관으로 나누고, 날짜도 .을 기준으로 년월일 나누기
    # 약관 날짜만큼 더하기(달 수이므로 12개 넘어가면 +1) 몫만큼 더하고 나머지 달 0이면 12
    # 년->월->일 순서로 비교해서 만약에 유효기간이 더 적다면 인덱스 추가
    answer = []
    today_year, today_month, today_date = map(int,today.split('.'))
    print('오늘', today_year, today_month, today_date)
    terms_dict = {}
    for i in terms:
        term, month = i.split()
        month = int(month)
        terms_dict[term] = month
    for i,p in enumerate(privacies):
        date, term = p.split()
        p_year, p_month, p_date = map(int,date.split('.'))
        #약관 마감 날짜
        p_month += terms_dict[term]
        if p_month > 12:
            p_year += (p_month - 1) // 12  # 연도 계산
            p_month = (p_month - 1) % 12 + 1  # 1~12로 조정
        
        #날짜 비교(p가 작으면, 같은 날짜도 파기)
        if p_year < today_year:
            answer.append(i+1)
        elif p_year == today_year:
            if p_month < today_month:
                answer.append(i+1)
            elif p_month == today_month:
                if p_date <= today_date:
                    answer.append(i+1)

    return answer