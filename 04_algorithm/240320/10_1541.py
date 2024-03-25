import sys

# 1) 입력값 받아서 "-"를 기준으로 나눈 값[expr] 가져오기!
expr = sys.stdin.readline().rstrip().split("-")

result = 0
# 2) expr에서 0번째는 그냥 더해서 결과에 더해주기
for i in expr[:1]:
    for j in i.split('+'):
        result += int(j)

# 3) expr에서 1번째 이후로는 각각 더해서 결과에 빼주기
for i in expr[1:]:
    for j in i.split('+'):
        result -= int(j)

print(result)