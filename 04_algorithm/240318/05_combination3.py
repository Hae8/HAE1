import itertools
class Solution:
    def combine(self, n: int, k: int) -> list[list[int]]:
        # result = []
        # for i in itertools.combinations(range(1, n+1), k):
        #     result.append(list(i))
        # return result
        return [list(i) for i in itertools.combinations(range(1, n+1), k)]

s = Solution()
print(s.combine(4, 2))