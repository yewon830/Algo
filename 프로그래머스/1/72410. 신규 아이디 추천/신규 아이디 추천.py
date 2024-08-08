def solution(new_id):
    # 소문자 치환
    new_id = new_id.lower()
    # 허용 안되는 문자 제거(replace 반환해야함)
    for c in new_id:
        if c in '~!@#$%^&*()=+[{]}:?,<>/':
            new_id = new_id.replace(c,'')
    # 연속 점 제거
    while True:
        if '..' in new_id:
            new_id = new_id.replace('..','.')
        else:
            break
    #.가 처음이나 끝에 있으면 제거
    if new_id[0] =='.':
        new_id = new_id[1:]
    if new_id and new_id[-1] == '.':
        new_id = new_id[:len(new_id)-1]
    #빈문자열이라면 a대입
    if not new_id:
        new_id = 'a'
    # 16자 이상이라면, 15자 넘는 문자 제거()
    if len(new_id) >= 16:
        new_id = new_id[:15]
    #제거 후 .이 끝이라면 마침표 제거
    if new_id and new_id[-1] == '.':
        new_id = new_id[:len(new_id)-1]
    #2자 이하라면 마지막 문자를 길이가3이 될 때까지 반복해서 추가
    if len(new_id)<=2:
        while len(new_id) <3:
            last = new_id[-1]
            new_id += last

    return new_id