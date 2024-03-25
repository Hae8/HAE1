class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        window = blocks[:k]
        min_count = window.count('W')
        for i in range(k, len(blocks)):
            window = window[1:] + blocks[i]
            if blocks[i] == "W":
                continue
            new_count = window.count('W')
            if new_count == 0:
                return 0
            if new_count < min_count:
                min_count = new_count
        return min_count

s = Solution()
print(s.minimumRecolors("WBBWBBWBW", 7))