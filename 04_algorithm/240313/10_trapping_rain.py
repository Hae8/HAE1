class Solution:
    def trap(self, height: list[int]) -> int:
        lt, rt = 0, len(height) - 1
        max_lt = height[lt]
        max_rt = height[rt]
        result = 0
        
        while lt < rt:
            if max_lt <= max_rt:
                result += max_lt - height[lt]
                lt += 1
                print('왼')
                max_lt = max(max_lt, height[lt])
            else:
                result += max_rt - height[rt]
                rt -= 1
                print('오')
                max_rt = max(max_rt, height[rt])
        return result
    
s = Solution()
result = s.trap([0,1,0,2,1,0,1,3,2,1,2,1])
print(result)