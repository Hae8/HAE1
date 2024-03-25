class Solution:
    def combine(self, n: int, k: int) -> list[list[int]]:
        result = []
        stack= [(1, k, [])]
        while stack:
            start, k, list = stack.pop()
            if k == 0:
                result.append(list)
            else:
                for i in range(start, n + 1):
                    new_list = list+[i]
                    stack.append((i+1, k-1, new_list))
        return result

s = Solution()
print(s.combine(4, 2))

# 결과물 = []
# 1부터 4까지 반복 : for i in range(1, 4+1)
# [1]
#   [1]을 추가 = [1]
#   2부터 4까지 반복
#       [2]
#           [2]를 추가 - [1,2]
#           3부터 4까지 반복
#              [3]을 추가? 안해!!!! 왜? 리스트의 길이가 K와 동일하기 때문!
#              [4]을 추가? 안해!!!! 왜? 리스트의 길이가 K와 동일하기 때문!
#       [3]
#           [3]을 추가 - [1,3]
#           4부터 4까지 반복
#              [4]을 추가? 안해!!!! 왜? 리스트의 길이가 K와 동일하기 때문!
#       [4]
#           [4]를 추가 - [1,4]
#           반복 X
# [2]
#   [2]를 추가
#   3부터 4까지 반복
#       [3]
#           [3]을 추가 - [2,3]
#           4부터 4까지 반복
#              [4]을 추가? 안해!!!! 왜? 리스트의 길이가 K와 동일하기 때문!
#       [4]
#           [4]를 추가 - [2,4]
#           반복 X
# [3]
#   [3]를 추가
#   3부터 4까지 반복
#       [4]
#           [4]를 추가 - [3,4]
#           반복 X
