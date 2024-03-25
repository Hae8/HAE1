class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        window = blocks[:k]
        min_count = window.count('W')
        for i in range(k, len(blocks)):
            # 앞에 글자 하나를 빼고, 그 다음 인덱스를 붙여서,
            # 윈도우를 이동하는 것처럼 사용
            window = window[1:] + blocks[i]
            new_count = window.count('W')
            min_count = min(min_count, new_count)
        return min_count

s = Solution()
print(s.minimumRecolors("WBBWBBWBW", 7))