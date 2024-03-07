# 순차탐색

def get_int_list():
    return [int(i) for i in input().split()]

N = int(input())
A = get_int_list()
M = int(input())
A_check = get_int_list()

# 시간 복잡도: A_check의 크기 * A의 배열 크기 (n**2)
for i in A_check: # for - O(n)
    if i in A: # in의 복잡도 : O(n)
        print(1)
    else:
        print(0)