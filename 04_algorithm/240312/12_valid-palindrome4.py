import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # new_s = ''.join([char.lower() for char in s if char.isalnum()])
        # new_s = ''.join([char.lower() for char in re.findall('\w', s)])
        new_s = re.sub('[^a-zA-Z0-9]', '', s.lower())
        new_new_s = new_s[::-1]
        return new_new_s == new_s

s = Solution()
result = s.isPalindrome("A man, a plan, a canal: Panama")
print(result)
