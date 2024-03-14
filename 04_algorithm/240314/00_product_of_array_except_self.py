class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        # result = [1 for i in nums]
        result = [1] * len(nums)
        
        def get_product_arr(start, end, step):
            temp = 1
            for i in range(start, end, step):
                temp *= nums[i]
                result[i+step] *= temp
                
        get_product_arr(len(nums) - 1, 0, -1)
        get_product_arr(0, len(nums) - 1, 1)
        
        return result
    
s = Solution()
nums = [1,2,3,4]
result = s.productExceptSelf(nums)
print(result)