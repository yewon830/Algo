
def solution(id_list, report, k):
    # 한 번에 한 명의 유저 신고
        # 횟수 제한 x 
        # 한 유저만 여러번 신고 가능, -> 벗 1번으로 처리
    #k번 이상 신고된 유저는 정지
        #신고 유저의 
    
    # 유저 신고 처리 결과 메일을 받은 횟수를 배열에 담아 출력
    # 뭔가 {유저:횟수}로 하면 편할거 같음. 메뉴 주문 횟수 같은거. 
    
    answer = []
    report_dict = {}
    for id in id_list:
        report_dict[id] = [0,0] #신고 당한거, answer
    report = set(report)
    
    for i in report:
        user1, user2 = i.split(" ")
        report_dict[user2][0] += 1
    
    for i in report:
        user1, user2 = i.split(" ")
        if report_dict[user2][0] >= k:
            report_dict[user1][1] += 1
    
    for key in report_dict:
        answer.append(report_dict[key][1])
    
    return answer