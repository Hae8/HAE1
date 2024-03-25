class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        result = count = blocks[:k].count('W')
        for i in range(k, len(blocks)):
            count += blocks[i] == 'W'
            count -= blocks[i-k] == 'W'
            result = min(result, count)
        return result

s = Solution()
print(s.minimumRecolors("WBBWBBWBW", 7))