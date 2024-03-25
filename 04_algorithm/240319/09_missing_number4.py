# 114ms

class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        nums = sorted(nums)
        for i in range(len(nums)):
            if i != nums[i]:
                return i
        return len(nums)

s = Solution()
result = s.missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])
print(result)
