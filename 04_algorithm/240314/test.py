# https://www.acmicpc.net/problem/18258

import sys
new_input = sys.stdin.readline
queue = []

num = new_input()
for i in range(int(num)):
    orders = new_input().split()
    order, *count = orders
    
    if order == 'push':
        queue.append(count[0])
    elif order == 'pop':
        result = queue.pop(0) if queue else -1
        print(result)
    elif order == 'size':
        result = len(queue)
        print(result)
    elif order == 'empty':
        result = 0 if queue else 1
        print(result)
    elif order == 'front':
        result = queue[0] if queue else -1
        print(result)
    elif order == 'back':
        result = queue[-1] if queue else -1
        print(result)
        
# 시간초과