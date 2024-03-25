class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        min_count = k
        for i in range(len(blocks)-k+1):
            new_count = blocks[i:i+k].count('W')
            min_count = min(min_count, new_count)
        return min_count

s = Solution()
print(s.minimumRecolors("WBBWBBWBW", 7))