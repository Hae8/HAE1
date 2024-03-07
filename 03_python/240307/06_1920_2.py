# 이진탐색

def get_int_list():
    return [int(i) for i in input().split()]

N = int(input())
A = sorted(get_int_list()) # O(NlogN)
M = int(input())
A_check = get_int_list()

def find_num(list, value): # O(NlogN)

    start = 0
    end = len(list)-1
    
    while start <= end:
        mid = (start + end) // 2
        if value == list[mid]:
            return 1
        elif value > list[mid]:
            start = mid + 1
        else:
            end = mid - 1
    return 0
    

for e in A_check: # O(n)
    # A 배열 안에서 e가 있는지 이진탐색!
    print(find_num(A, e))
    
    
#-----------------------------------------------------------------------------------------#

# 함수 없이 작성 시

#     def get_int_list():
#     return [int(i) for i in input().split()]

# A = sorted(get_int_list())
# B = get_int_list()

# for e in B:
#     result = 0
#     start = 0
#     end = len(A) - 1
#     while start <= end:
#         mid = (start + end) // 2
#         if e > A[mid]:
#             start = mid + 1
#         elif e < A[mid]:
#             end = mid - 1
#         else:
#             result = 1
#             break
#     print(result)