class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        count = 0
        k = 0 # 중간 계산값
        for i in [0] + flowerbed + [0]: # 시작, 끝에 0 추가
            if i: # 1
                count += (k-1)//2
                k = 0 # 초기화
            else:
                k += 1
        count += (k-1)//2 # 0으로 loop 종결된 경우
        return count >= n
s = Solution()
print(s.canPlaceFlowers([0], 1))