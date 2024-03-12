import re
from collections import deque

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # new_s = deque([char.lower() for char in s if char.isalnum()])
        # new_s = deque([char.lower() for char in re.findall('\w', s)])
        new_s = deque(re.sub('[^a-zA-Z0-9]', '', s.lower()))
        while len(new_s) > 1:
            if new_s.popleft() != new_s.pop() :
                return False
        return True
        
s = Solution()
result = s.isPalindrome("ab_a")
print(result)