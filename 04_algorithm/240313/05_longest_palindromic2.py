# 시간 복잡도 조정
class Solution:
    def longestPalindrome(self, s: str) -> str:
        def oddCheck(i):
            left = i
            right = i+2
            while left >= 0 and right <= s_length-1 and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left+1:right]
        
        def evenCheck(i):
            left = i
            right = i+1
            while left >= 0 and right <= s_length-1 and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left+1:right]

        result = ""
        s_length = len(s)
        if len(s) < 2 or s == s[::-1]:
            return s
        for i in range(s_length - 1):
            print(evenCheck(i))
            print(oddCheck(i))
        return result


sol = Solution()
s = "김김최최김"
sol.longestPalindrome(s)