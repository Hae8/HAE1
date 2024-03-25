import itertools

class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        result = []
        for i in range(len(nums)+1):
            for j in itertools.combinations(nums, i):
                result.append(list(j))
        return result

s = Solution()
print(s.subsets([1,2,3]))

# 공집합 추가

# [1,2,3] 반복
# [1]
# 부분집합 = [1]
#   나머지 [2,3] 반복
#   [2]
#   부분집합 = [1,2]
#       나머지 [3] 반복
#       [3]
#       부분집합 = [1,2,3]
#           나머지 [] 반복
#   [3]
#   부분집합 = [1,3]
#      나머지 [] 반복

# [2]
# 부분집합 = [2]
#   나머지 [3] 반복
#       [3]
#       부분집합 = [2,3]
#          나머지 [] 반복

# [3]
# 부분집합 = [3]
#   나머지 [] 반복