class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        nums_dict = {}
        # for i, v in enumerate(nums):
        #     nums_dict[v] = i
        # for i, v in enumerate(nums):
        #     gap = target -v
        #     if gap in nums_dict and i != nums_dict[gap]:
        #         return [i, nums_dict[gap]]
        
        for i, v in enumerate(nums):
            gap = target -v
            if gap in nums_dict and i != nums_dict[gap]:
                return [i, nums_dict[gap]]
            nums_dict[v] = i
            
s = Solution()
print(s.twoSum([2,7,6,10], 9))