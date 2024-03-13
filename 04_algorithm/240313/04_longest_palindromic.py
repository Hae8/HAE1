# class Solution:
#     def longestPalindrome(self, s: str) -> str:
#         result = ''
#         for i in range(len(s)):
#             for j in range (i, len(s)):
#                 temp = s[i:j+1]
#                 if len(temp) > len(result) and temp == temp[::-1]:
#                     result = temp # 팰린드롬인 것들만 모은다.
        
#         return result
        
# sol = Solution()
# s = "안녕우영우"
# print(sol.longestPalindrome(s))

#-----------------------------------------------------------------------------------------#
# 시간 복잡도 조정

class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = ''
        for i in range(len(s)):
            if len(s) < 2 or s == s[::-1]:
                return s
            for j in range (i, len(s)):
                if j + 1 - i >= len(result):
                    temp = s[i:j+1]
                    if len(temp) > len(result) and temp == temp[::-1]:
                        result = temp # 팰린드롬인 것들만 모은다.
        return result
        
sol = Solution()
s = "안녕우영우"
print(sol.longestPalindrome(s))