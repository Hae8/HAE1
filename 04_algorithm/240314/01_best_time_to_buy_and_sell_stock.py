class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        max_profit = 0
        for i in range(len(prices)-1):
            buy_p = prices[i]
            for j in range(i+1, len(prices)):
                sell_p = prices[j]
                profit = sell_p - buy_p
                if profit > max_profit:
                    max_profit = profit
        return max_profit

s= Solution()
prices = [7,1,5,3,6,4]
print(s.maxProfit(prices))