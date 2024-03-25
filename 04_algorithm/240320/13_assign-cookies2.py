class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        result = 0
        g.sort()
        s.sort()
        
        kid_idx, cookie_idx = 0, 0
        while kid_idx < len(g) and cookie_idx < len(s):
            if s[cookie_idx] >= g[kid_idx]:
                print(f"{s[cookie_idx]} 크기의 쿠키를 {g[kid_idx]}에게 준다.")
                result += 1
                kid_idx += 1
            cookie_idx += 1
        return result

sol = Solution()
g = [1,2,3]
s = [1,2]

result = sol.findContentChildren(g, s)
print(result)