class Solution:
    def reverseString(self, s: list[str]) -> None:
        # s[:] = s[::-1]
        s.reverse()

list_s = ["h", "e", "l", "l", "o"]

sol = Solution()
sol.reverseString(list_s)
print(list_s)