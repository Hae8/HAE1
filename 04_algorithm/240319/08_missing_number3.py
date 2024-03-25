# 119ms
class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        sorted_num = sorted(nums)
        idx = 0
        while idx < len(sorted_num):
            if sorted_num[idx] != idx:
                return idx
            idx += 1
        return idx