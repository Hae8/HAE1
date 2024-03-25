class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:        
        # 내 주변에 있는 육지들을 찾아서, '*'로 바꾼다.
        def dfs(x, y):
            grid[y][x] = '*'
            # 상하좌우 탐색
            direction = [(x, y + 1), (x, y - 1), (x - 1, y), (x + 1, y)]
            for d_x, d_y in direction:
                if d_x < 0 or d_x >= len(grid[0]):
                    continue
                if d_y < 0 or d_y >= len(grid):
                    continue
                if grid[d_y][d_x] != '1':
                    continue
                dfs(d_x, d_y)
        count = 0
        # 반복문 돌리기!
        for y in range(len(grid)):
            for x in range(len(grid[0])):
                if grid[y][x] == '1':
                    dfs(x, y)
                    # stop
                    # 다 바꿨다면, 육지개수를 1 증가
                    count += 1
        return count
        
s = Solution()
grid = [
    ["1", "1", "1", "1", "0"], # (0,0) (1,0),(2,0),(3,0),(4,0)
    ["1", "1", "0", "1", "0"], # (0,1) (1,1),(2,1),(3,1),(4,1)
    ["1", "1", "0", "0", "1"], # (0,2) (1,2),(2,2),(3,2),(4,2)
    ["0", "0", "0", "1", "1"]  # (0,3) (1,3),(2,3),(3,3),(4,3)
]

print(s.numIslands(grid))