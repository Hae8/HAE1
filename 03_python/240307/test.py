# 순차탐색

N = int(input())
A = [int(i) for i in input().split()]
M = int(input())
A_check = [int(i) for i in input().split()]

for i in range (M):
    if A_check[i] in A:
        print(1)
    else:
        print(0)

#------------------------------------------------------------#

# 이진탐색

N = int(input())
A = sorted([int(i) for i in input().split()])
M = int(input())
A_check = [int(i) for i in input().split()]

def find_num(list, value):

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
    

for i in range (M):
    print(find_num(A, A_check[i]))
    
#------------------------------------------------------------#
def sel_sorted(list):
    length = len(list)
    for x in range(length - 1): #O(n-1)
        min = x
        for y in range(x+1, length) : #O(n-1)
            if list[min] > list[y]:
                min = y
        list[x], list[min] = list[min], list[x]
    return list

print(sel_sorted([5, 4, 2, 6, 3, 1]))

#------------------------------------------------------------#

def insert_sorted(list):
    length = len(list)
    for x in range(1, length):
        key = list[x]
        y = x - 1
        while y >= 0 and list[y] > key:
            list[y + 1] = list[y]
            y -= 1
        list[y + 1] = key
    print (list)
    return list

print(insert_sorted([5, 4, 2, 6, 3, 1]))