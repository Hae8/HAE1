# https://www.acmicpc.net/problem/18258

import sys, collections
new_input = sys.stdin.readline
# queue = []
queue = collections.deque()

num = int(new_input())
for i in range(num):
    order, *count = new_input().split()
    
    if order == 'push':
        queue.append(count[0])
    elif order == 'pop':
        result = queue.popleft() if queue else -1
            # pop()의 시간복잡도는 1 이지만,
            # pop(n)의 시간 복잡도는 O(N)이다.
            # - > deque를 collections에서 불러와 popleft()함수를 사용하여 시간복잡도를 개선하자!
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