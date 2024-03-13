# https://www.acmicpc.net/problem/2953

# 참가자 별 점수를 합산하기
results = []
for i in range(5):
    sum = 0
    points = [int(j) for j in input().split()]
    for point in points:
        sum += point
    # print(sum)
    results.append(sum)
# 참가자 별 점수 비교하기
winner = max(results)
print(results.index(winner), winner)

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/