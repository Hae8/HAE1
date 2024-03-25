import sys

N, M = [int(i) for i in sys.stdin.readline().split()]
nums = [i for i in range(1, N+1)]

def dfs(path):
    if len(path) == M:
        print(*path)
        return
    for i in nums:
        if i not in path:
            path.append(i)
            dfs(path)
            path.pop()
dfs([])