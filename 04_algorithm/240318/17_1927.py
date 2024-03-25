import sys, heapq
N = int(sys.stdin.readline())
array = []
for _ in range(N):
    X = int(sys.stdin.readline())
    if X == 0:
        if array:
            # heapq.heappop(array)
            # print(array)
            print(heapq.heappop(array))
        else:
            # pass
            print(0)
    else:
        heapq.heappush(array, X)
        # print(array)