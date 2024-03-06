import random

# rand_num10.txt에 무작위 숫자 10개 write
# 파일 열기
# 10번 반복
    # rand_num = random.randint(1,30)
    # 파일에 랜덤 숫자 쓰기

f = open("rand_num10.txt", "w")
for i in range (10):
    rand_num = random.randint(1,30)
    f.write(f'{rand_num}\n')
    # f.write(str(rand_num))
    # f.write("{0}".format(rand_num))

f.close()

# # 숫자를 입력받는다.
Num = input()

# 파일을 읽어온다. (f 객체)
f = open('rand_num10.txt', 'r')

# f를 반복해서
    # 텍스트(각 숫자)를 가져온다. -> int 반환
    # 혹시 각 숫자가 내가 입력한 숫자와 같으면
        # 해당 인덱스 출력
    # 계속 반복해도 없으면, -1 출력
    
def check_num():
    for i in range(1,10+1):
        line = f.readline()
        if Num == line.strip():
            return i
    return -1

print(check_num())

f.close()


# N = int(input())

# def find_num(n):
#     with open('rand_num10.txt', 'r') as f:
#         idx_num = 1
#         for line in f:
#             num = int(line.strip())
#             if num == n:
#                 return idx_num
#             idx_num += 1
#         return -1
    
# result = find_num(N)
# print(result)

# def find_num2(n):
#     with open('rand_num10.txt', 'r') as f:
#         data = [ int(i) for i in f.read().split()]
#         if n in data:
#             return data.index(n)
#         return -1

# result = find_num2(N)
# print(result)