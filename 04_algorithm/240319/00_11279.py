import sys, heapq
N = int(sys.stdin.readline())
array = []
for _ in range(N):
    X = int(sys.stdin.readline())
    if X == 0:
        if array:
            print(-1 * heapq.heappop(array))
        else:
            print(0)
    else:
        heapq.heappush(array, -1 * X)