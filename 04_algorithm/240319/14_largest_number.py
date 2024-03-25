class Solution:
    def largestNumber(self, nums: list[int]) -> str:
        str_nums = [str(i) for i in nums]
        str_nums.sort(key=lambda x: x*9, reverse=True)
        return str(int(''.join(str_nums)))
    
s = Solution()
print(s.largestNumber([3, 30, 34, 5, 9]))