class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        nums_length = len(nums)
        nums.sort()
        for i in range(nums_length-2):
            if i > 0 and nums[i] == nums[i-1]: # 동일한 숫자가 또 나오면 중복을 피하기 위해 넘어간다.
                continue
            for j in range(i+1, nums_length-1):
                if j > i + 1 and nums[j] == nums[j-1]: # 동일한 숫자가 또 나오면 중복을 피하기 위해 넘어간다.
                    continue
                for k in range(j+1, nums_length):
                    if k > j + 1 and nums[k] == nums[k-1]: # 동일한 숫자가 또 나오면 중복을 피하기 위해 넘어간다.
                        continue
                    if nums[i]+nums[j]+nums[k] == 0:
                        result.append([nums[i], nums[j], nums[k]])
        return result
    
s = Solution()
nums = [-1,0,1,2,-1,-4]
result = s.threeSum(nums)
print(result)