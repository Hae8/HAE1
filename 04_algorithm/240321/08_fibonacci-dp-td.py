class Solution:
    def fib(self, n: int) -> int:
        def top_down(num:int, memo:list[int]) -> int:
        # 탑다운방식 : 큰 문제를 해결하기 위해 작은 부분의 문제를 해결
        # 계산이 필요한 순간, 계산 후 결과를 저장해놓는다.
        # 재귀를 통해 이전에 계산한 값들을 활용! [간결하고 가독성이 좋다.]
            if num <= 1:
                return num
            elif memo[num] == 0:
                memo[num] = top_down(num-1, memo) + top_down(num-2, memo)
            # else:
            #     print(memo)
            return memo[num]
        # memoization
        memo = [0, 1] + [0] * (n - 1)
        return top_down(n, memo)

s = Solution()
print(s.fib(6))
