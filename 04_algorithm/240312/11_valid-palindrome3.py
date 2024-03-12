import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # new_s = [char.lower() for char in s if char.isalnum()]   
        # new_s = [char.lower() for char in re.findall('\w', s)]
        new_s = list(re.sub('[^a-zA-Z0-9]', '', s.lower()))
        new_new_s = list(reversed(new_s))
        return new_s == new_new_s
        
s = Solution()
result = s.isPalindrome("ab_a")
print(result)
