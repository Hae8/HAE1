class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        result = 0
        g.sort()
        s.sort()
        # g를 반복 (kid)
        for kid in g:
            # s를 반복 (cookie)
            for cookie in s:
                # 만약 kid보다 cookie가 크면 아이는 만족한다.
                if kid <= cookie:
                    result += 1
                    s.remove(cookie)
                    break
        return result

sol = Solution()
g = [1,2,3]
s = [1,2]

result = sol.findContentChildren(g, s)
print(result)