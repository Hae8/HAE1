# 투 포인터 : 선형 자료구조에서 활용되는 전략
# 왼쪽과 오른쪽 포인터를 활용
# 대부분 정렬이 된 상태에서 사용한다. (반드시 그런 건 아님!)

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        lt, rt = 0, len(nums)-1
        while lt < rt:
            # 조건에 따라서,
            # lt += 1
            # rt -= 1
            temp_sum = nums[lt] + nums[rt]
            if target == temp_sum:
                return [lt, rt]
            elif target < temp_sum:
                rt -= 1
            elif target > temp_sum:
                lt += 1

s = Solution()
print(s.twoSum([2,6,7,10], 9)) # 정렬된 리스트에 대해서만 투포인터를 사용하자