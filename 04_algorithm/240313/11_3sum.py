class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        nums_length = len(nums)
        for i in range(nums_length-2):
            for j in range(i+1, nums_length-1):
                for k in range(j+1, nums_length):
                    if nums[i]+nums[j]+nums[k] == 0:
                        temp = [nums[i], nums[j], nums[k]]
                        temp.sort() # 중복된 리스트를 거른다
                        if temp not in result:
                            result.append(temp)
        return result
    
s = Solution()
nums = [-1,0,1,2,-1,-4]
result = s.threeSum(nums)
print(result)