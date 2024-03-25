class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:        
        count = 0
        # 반복문 돌리기!
        for y in range(len(grid)):
            for x in range(len(grid[0])):
                if grid[y][x] == '1':
                    # 섬 개수 1개 증가
                    count += 1
                    # 내 주변에 있는 육지들을 찾아서, '*'로 바꾼다.
                    stack = [(x, y)]
                    while stack:
                        x, y = stack.pop()
                        # 상하좌우 탐색
                        direction = [(x, y + 1), (x, y - 1), (x - 1, y), (x + 1, y)]
                        for d_x, d_y in direction:
                            if 0 <= d_x < len(grid[0]) and 0 <= d_y < len(grid) and grid[d_y][d_x] == '1':
                                grid[d_y][d_x] = '*'
                                stack.append((d_x, d_y))
        return count
        
s = Solution()
grid = [
    ["1", "1", "1", "1", "0"], # (0,0) (1,0),(2,0),(3,0),(4,0)
    ["1", "1", "0", "1", "0"], # (0,1) (1,1),(2,1),(3,1),(4,1)
    ["1", "1", "0", "0", "1"], # (0,2) (1,2),(2,2),(3,2),(4,2)
    ["0", "0", "0", "1", "1"]  # (0,3) (1,3),(2,3),(3,3),(4,3)
]

print(s.numIslands(grid))