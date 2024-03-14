class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit = 0
        min_p = prices [0]
        for _, cur_p in range(len(prices)-1):
            min_p = min(cur_p, min_p)
            profit = cur_p - min_p
            max_profit = profit
        return max_profit

s= Solution()
prices = [7,1,5,3,6,4]
print(s.maxProfit(prices))