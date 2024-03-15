graph = {
        1 : [2,3,4],
        2 : [5],
        3 : [5],
        4 : [],
        5 : [6,7],
        6 : [],
        7 : [3],
}

def recursive_dfs(v, discovered = []):
    discovered.append(v)
    for i in graph[v]:
        if i not in discovered:
            discovered = recursive_dfs(i, discovered)
    return discovered

print(recursive_dfs(1)) # [1, 2, 5, 6, 7, 3, 4]