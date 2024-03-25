# Assign Cookies
# https://leetcode.com/problems/assign-cookies

class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        good_kids = 0
        g.sort()  # (O(nlgn))
        s.sort()  # (O(nlgn))

        # 130ms
        # two-pointer, s 기준으로 돌려보기
        p_g = 0
        for p_s in range(len(s)):
            if g[p_g] <= s[p_s]:
                good_kids += 1
                p_g += 1
                # index 벗어나면 break
                if p_g == len(g):
                    break

        # 134ms
        # while g and s:
        #     # 욕심 젤 많은 아이 pop
        #     if s[-1] >= g.pop(): # 욕심 젤 많은 아이가 만족
        #         good_kids += 1
        #         s.pop() # 쿠키 뱉어

        # 167ms
        # for i in g:
        #     while s:
        #         # 불만족한 사이즈의 쿠키는 필요가 없어지므로 일괄적으로 pop
        #         j = s.pop(0)
        #         # 만족
        #         if i <= j:
        #             good_kids += 1
        #             break

        return good_kids

# g, s = [1, 2, 3], [1, 1]
# g, s = [1,2], [1,2,3]
# g, s = [1, 2, 3], [3]
g, s = [10, 9, 8, 7], [5, 6, 7, 8]
sol = Solution()
print(sol.findContentChildren(g, s))
