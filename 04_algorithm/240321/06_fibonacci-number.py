class Solution:
    def fib(self, n: int) -> int:
        # 0 1 1 2 3 5 8 13 21
        # if n == 0:
        #     return 0
        # elif n == 1:
        #     return 1
        
        if n <= 1:
            return n
        return self.fib(n-1) + self.fib(n-2)

s = Solution()
print(s.fib(20))