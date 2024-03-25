class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        i = 0
        min_count = k
        while i <= len(blocks) - k:
            window = blocks[i:k+i]
            new_count = window.count('W')
            min_count = min(new_count, min_count)
            i += 1
        return min_count

s = Solution()
print(s.minimumRecolors("WBBWBBWBW", 7))