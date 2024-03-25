class Solution:
    def num_to_word(self, n:int) -> str:
        nums_dict = {
            100_000_000: '억', 10_000: '만', 1_000: '천', 100: '백',  
            10: '십', 9: '구', 8: '팔', 7: '칠', 6: '육', 5: '오', 4: '사', 3: '삼', 2: '이', 1: '일'
        }
        if n == 0:
            return '영'
        result = ""
        for key, kor in nums_dict.items():
            # 만약 입력한 n이 크거나 같으면.
            if n >= key:
                # 몫
                m = n // key
                # n을 나머지 값으로 변경
                n = n % key
                # 몫이 1보다 크면, [일십 -> 십, 이십 -> 이십, 삼십 -> 삼십]
                if m > 1:
                    result += self.num_to_word(m) + kor
                else:
                    result += kor
                if n == 0:
                    break
        return result

s = Solution()
print(s.num_to_word(10010))