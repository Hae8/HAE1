# https://www.acmicpc.net/problem/2164

import sys, collections
new_input = sys.stdin.readline

N = int(new_input())
queue = collections.deque()

for i in range(N):
    queue.append(i+1)

while len(queue) != 1:
    queue.popleft()
    card = queue.popleft()
    queue.append(card)

print(queue[0])