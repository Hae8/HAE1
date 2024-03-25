import sys, itertools

N, M = [int(i) for i in sys.stdin.readline().split()]
nums = [i for i in range(1, N+1)]

results = list(itertools.product(nums, repeat=M))
for i in results:
    print(*i)
