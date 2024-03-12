record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
        
def solution(record):     
    answer = []
    user_info = {} 

    for msg in record:
        # print(msg.split())
        cmd, uid, *other = msg.split()
        # print(cmd, uid)
        if cmd == 'Enter' or cmd == 'Change':
            nickname = other[0]
            user_info[uid] = nickname
    # user_info = {i.split()[1]: i.split()[-1] for i in record if i.split()[0] != 'Leave'}
    
    for msg in record:
        cmd, uid, *other = msg.split()
        if cmd == 'Enter':
            answer.append(f'{user_info[uid]}님이 들어왔습니다.')
        elif cmd == 'Leave':
            answer.append(f'{user_info[uid]}님이 나갔습니다.')
    return answer

result = solution(record)
print(result)
# [
    # "Prodo님이 들어왔습니다.",
    # "Ryan님이 들어왔습니다.",
    # "Prodo님이 나갔습니다.",
    # "Prodo님이 들어왔습니다."
# ]