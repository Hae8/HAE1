# 
class Solution:
    def missingNumber(self, nums):
        n = len(nums)
        add = (n+1)*n //2
        result = add - sum(nums)
        return result

s = Solution()
print(s.missingNumber([3, 0,1,2,4,5,9,7,6]))