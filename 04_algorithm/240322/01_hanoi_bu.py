N = int(input())
# 1 3 7 15 31 63
def hanoi(n):
    tabul = [1]
    if n in tabul:
        return n
    for idx in range(1, n):
        tabul.append(tabul[idx-1] * 2 + 1)
    return tabul[n-1]
print(hanoi(N))
