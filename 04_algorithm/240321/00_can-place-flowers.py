class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        # 만약 화단의 길이가 1개면... 여기서 결정
        if flowerbed == [0]:
            flowerbed = [1]
            n -= 1
        # 양끝은 연속된 두개가 0이여야 끝에 심을 수 있다.
        if flowerbed[:2] == [0, 0]:
            flowerbed[0] = 1
            n -= 1
        if flowerbed[-2:] == [0, 0]:
            flowerbed[-1] = 1
            n -= 1
        # 두번째부터 끝에서 두번째까지는 좌우가(자신도) 0이여야 한다.
        for i in range(1, len(flowerbed)-1):
            if flowerbed[i-1:i+2] == [0, 0, 0]:
                flowerbed[i] = 1
                n -= 1
        return n <= 0
    
s = Solution()
print(s.canPlaceFlowers([0], 1))