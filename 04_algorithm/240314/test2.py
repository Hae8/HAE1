# https://www.acmicpc.net/problem/2164

import sys
new_input = sys.stdin.readline

N = new_input()
queue = [i+1 for i in range(int(N))]

for i in range(int(N)-1):
    queue.pop(0)
    card = queue.pop(0)
    queue.append(card)

print(queue[0])

# 시간 초과