class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        # 1) for enumerate 사용해서 반복 (인덱스 i, 값 plant)
        for i, plant in enumerate(flowerbed):
            # 2) 만약 심어져있으면 (plant 값이 1이면),
            if plant == 1:
                continue
            # 3) 만약 화단의 위치가 0보다 크고, 그 앞에 꽃이 심어져 있으면
            if i > 0 and flowerbed[i-1] == 1:
                continue
            # 4) 만약 화단의 위치가 "화단의길이-1"보다 작고, 뒤에 꽃이 심어져 있으면,
            if i < len(flowerbed)-1 and flowerbed[i+1] == 1:
                continue
            # 5) 꽃을 심어준다. / n -= 1
            flowerbed[i] = 1
            n -= 1
        return n <= 0
s = Solution()
print(s.canPlaceFlowers([0], 1))