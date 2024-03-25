import sys

N = int(sys.stdin.readline())
member_list = [sys.stdin.readline().split() for i in range(N)]

member_list.sort(key=lambda x: int(x[0]))

for i in member_list:
    print(*i)