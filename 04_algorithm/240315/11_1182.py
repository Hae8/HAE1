import sys

N, S = [int(i) for i in sys.stdin.readline().split()]
arr = [int(i) for i in sys.stdin.readline().split()]

# N, S = [5, 0]
# arr = [-7, -3, -2, 5, 8]
result = 0
# count = 0

# arr의 부분수열의 합 = 0 이 되는 수열 찾기
def dfs(idx, sum) :
    global result
    # global count
    if idx >= N:
        return # 함수 탈출 조건
    # count += 1
    sum += arr[idx]
    if sum == S:
        result += 1
    dfs(idx+1, sum) # 자기 자신을 제외하는 재귀
    dfs(idx+1, sum - arr[idx]) # 자기 자신을 포함하는 재귀
    
dfs(0,0)
print(result)
# print(count)