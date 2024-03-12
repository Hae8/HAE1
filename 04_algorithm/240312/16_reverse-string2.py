class Solution:
    def reverseString(self, s: list[str]) -> None:
        # 투 포인터를 이용한 스왑
        left = 0
        right = len(s) - 1
        
        while left < right :
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1

list_s = ["h","e","l","l","o"]

sol = Solution()
sol.reverseString(list_s)
print(list_s)
