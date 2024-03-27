from collections import defaultdict

def solution(fees, records):
    answer = []
    park_using = {}
    park_info = defaultdict(list)
    
    # 요금 기록을 쪼갠다.
    default_time, default_fee, unit_time, unit_fee = fees
    
    # 입출차 기록을 쪼갠다.
    for i in records:
        time, car_num, status = i.split()
        
        # 시간은 분단위로 바꾼다.
        h, m = [int(i) for i in time.split(":")]
        minute = h * 60 + m
        # park_info[car_num].append(minute)
        
        if status == 'IN':
            park_info[car_num] = time
        elif status == 'OUT':
            if car_num in park_using:
                park_using[car_num] += (time - int(park_info[car_num]))
            else:
                park_using[car_num] = (time - int(park_info[car_num]))
            del park_info[car_num]
            
    for car_num, time in park_info.items():
        if car_num in park_using:
            park_using[car_num] += 1439 - time
        else:
            park_using[car_num] = 1439 - time
    
    for car_num, time in sorted(park_using.items(), key = lambda x:x[0]):
        answer.append(default_fee+ max(0, ((time-default_time)/unit_time)) * unit_fee)
    return answer

solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])
