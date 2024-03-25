# 112ms

class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        nums.sort()
        for i, num in enumerate(nums):
            if i != num:
                return i
        return len(nums)
