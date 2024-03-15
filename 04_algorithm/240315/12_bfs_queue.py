graph = {
        1 : [4,3,2],
        2 : [5],
        3 : [5],
        4 : [],
        5 : [7,6],
        6 : [],
        7 : [3],
}

from collections import deque

def queue_bfs(v):
    discovered = [v]
    queue = deque([v])
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if i not in discovered:
                discovered.append(i)
                queue.append(i)
    return discovered

print(queue_bfs(1))