def find_num(list, value):
    """
        [선형탐색, 순차탐색]
        list 내에서 value 값에 해당하는 모든 위치를 반환
        없으면 -1 반환
    """
    
    result = [i for i in range (len(list)) if value == list[i]] # 리스트 컴프리헨션
        # result = []
        # for i in range (len(list)):
        #     if value == list[i]:
        #         result.append(i)
    
    return result if result else -1 # 삼항 연산자: [True 값] if [조건] else [False 값]
        # if result:
        #     return result
        # else:
        #     return -1
        # return result


my_arr = [7,1,9,3,3,5,5,3]
# my_arr = [int(i) for i in input().split()]
value = int(input())
print(find_num(my_arr,value))