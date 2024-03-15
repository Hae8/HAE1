graph = {
        1 : [4,3,2],
        2 : [5],
        3 : [5],
        4 : [],
        5 : [7,6],
        6 : [],
        7 : [3],
}

def stack_dfs(start_v):
    discovered = []
    stack = [start_v]
    
    while stack:
        v = stack.pop()
        if v not in discovered:
            discovered.append(v)
            stack.extend(graph[v])
            # for i in graph[v]:
            #     stack.append(i)
    return discovered

print(stack_dfs(1))