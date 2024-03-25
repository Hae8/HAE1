N = int(input())
# 1 3 7 15 31 63
def hanoi(n):
    def top_down(idx):
        if idx == 0:
            return 1
        elif memo[idx] == 0:
            memo[idx] = top_down(idx-1) * 2 + 1
            return memo[idx]
        return memo[idx]
    memo = [1] + [0] * (n-1)
    return top_down(n-1)
print(hanoi(N))
