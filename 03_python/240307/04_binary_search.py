def find_num(list, value):
    """
    [이진탐색, 이분탐색]
    list 내에서 value 값에 해당하는 위치를 반환
    없으면 -1 반환
    """
    # 변수 생성
    count = 0
    start = 0
    end = len(list)-1
    
    # 가운데 위치 가져와서 비교
    while start <= end:
        count += 1
        mid = (start + end) // 2
        if value == list[mid]:
            print(f'{count}번만에 찾았습니다.')
            return mid
        elif value > list[mid]:
            start = mid + 1
        else: # value < list[mid]
            end = mid - 1
    print(f'{count}번만에 찾았습니다.')
    return -1
    
# 이진탐색은 리스트가 정렬되어 있지 않거나, 리스트 내에 중복된 값이 존재할 경우 문제가 생길 수 있다.
my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
my_value = int(input())
print(find_num(my_list, my_value))