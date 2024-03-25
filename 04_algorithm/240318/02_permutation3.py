# 순열 리턴하기
import itertools
# 서로 다른 정수 배열에서 가능한 모든 순열을 반환
class Solution:
    def permute(self, nums: list[int]) -> list[list[int]]:
        return [list(i) for i in itertools.permutations(nums)]
        # result = []
        # for i in itertools.permutations(nums):
        #     result.append(list(i))
        # return result
    
s = Solution()
print(s.permute([1,2,3]))