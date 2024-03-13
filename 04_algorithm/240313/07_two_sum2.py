class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i, v in enumerate(nums):
            gap = target - v
            if gap in nums[i+1:]:
                return [i, nums[i+1:].index(gap)+i+1]
            
s = Solution()
print(s.twoSum([2,7,6,10], 9))