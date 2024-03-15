from collections import deque
import sys

N, M = [int(i) for i in sys.stdin.readline().split()]
maze = []
for _ in range(N):
    maze.append([i for i in sys.stdin.readline().rstrip()])
    
# N, M = [4, 6]
# maze = [[1,0,1,1,1,1],
#         [1,0,1,0,1,0],
#         [1,0,1,0,1,1],
#         [1,1,1,0,1,1],]

direction = [(-1,0), (1,0), (0,-1), (0,1)] # 상 하 좌 우

queue = deque() 
queue.append([0,0])# 시작위치
while queue:
    x, y = queue.popleft()
    for d in direction:
        new_x, new_y = x + d[0], y + d[1]
        if 0 <= new_x < M and 0 <= new_y < N:
            if maze[new_y][new_x] == 1: # 현재 길의 값이 1이라면
                maze[new_y][new_x] = maze[y][x] + 1 # 지나온 길의 값을 누적적으로 더해가며 이동한다.
                queue.append([new_x, new_y])
    # print(maze)

print(maze[N-1][M-1])