class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        nums.sort()
        nums_length = len(nums)
        
        for i in range(nums_length - 2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            lt, rt = i + 1, len(nums)-1
            
            while lt < rt:
                temp = nums[i] + nums[lt] + nums[rt]
                
                if temp == 0:
                    result.append([nums[i],nums[lt],nums[rt]])
                    while lt < rt and nums[lt] == nums[lt+1]:
                        lt += 1
                    while lt < rt and nums[rt] == nums[rt-1]:
                        rt -= 1
                    lt += 1
                    rt -= 1
                elif temp > 0:
                    rt -= 1
                else:
                    lt += 1
        return result

s = Solution()
result = s.threeSum([-2,0,0,2,2])
print(result)
# [[-2,0,2]]