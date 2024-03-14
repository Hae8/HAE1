class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }
        for i in s:
            if i in mapping:
                stack.append(i)
            elif not stack or mapping[stack.pop()] != i:
                return False
        return bool(not stack)

sol = Solution()
sol.isValid('(){}[]')