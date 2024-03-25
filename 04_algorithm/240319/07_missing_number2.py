# 103ms
class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        # 인덱스를 이용해보자
        l = len(nums)
        arr = [False]*(l + 1)

        # 찾는 값을 제외한 index의 value는 True가 될 것!!
        for i in nums:
            arr[i] = True        
        return arr.index(False)

sol = Solution()
print(sol.missingNumber([3, 0, 1, 2, 4, 5, 9, 7, 6]))
