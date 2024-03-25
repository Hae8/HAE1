# 시간 초과
import sys
N = int(sys.stdin.readline())
array = []
for _ in range(N):
    X = int(sys.stdin.readline())
    if X == 0:
        if array:
            min_num = min(array)
            print(min_num)
            array.remove(min_num)
        else:
            print(0)
    else:
        array.append(X)