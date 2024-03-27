from collections import defaultdict

def solution(fees, records):
    answer = []
    park_info = defaultdict(list)
    # 입출차 기록을 쪼갠다.
    for i in records:
        time, car_num, status = i.split()
        
        # 시간은 분단위로 바꾼다.
        h, m = [int(i) for i in time.split(":")]
        minute = h * 60 + m
        park_info[car_num].append(minute)
        
    park_fee = defaultdict(int)
    print(park_info.items())
    for k, v in park_info.items():
        for i in range(len(park_info)):
            if len(park_info) % 2 = 0:
                park_fee[k] = v[]
            else :
                park_info
    
    print(park_fee)

solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])