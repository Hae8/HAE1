# 91~122ms
class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        range_list = [i for i in range(len(nums)+1)]
        answer_set = set(range_list) - set(nums)
        answer = answer_set.pop()
        return answer
