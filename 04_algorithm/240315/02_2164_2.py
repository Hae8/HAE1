import sys, collections
new_input = sys.stdin.readline

N = int(new_input())
queue = collections.deque()

for i in range(N):
    queue.append(i+1)

while len(queue) != 1:
    queue.popleft()
    queue.rotate(-1)

print(*queue)

# queue = collections.deque([1, 2, 3, 4, 5])
# queue.rotate(2)
# print(queue)