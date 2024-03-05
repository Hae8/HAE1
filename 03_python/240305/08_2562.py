# 9번 숫자 입력 받아오기
# num_list = [int(input()) for _ in range(9)]
# n_max = max(num_list)
# print(n_max)
# print(num_list.index(n_max)+1)

## num_list = [3, 29, 38, 12, 57, 74, 40, 85, 61]
## n_max = num_list[0]
## for num in num_list:
##     print(f'{num}과 {n_max}를 비교합니다.')
##     if num > n_max:
##         print(f'이제 최대값은 {num}가 됩니다.')
##         n_max = num
## print(n_max)

num_list = [3, 29, 38, 12, 57, 74, 40, 85, 61]
n_max = num_list[0]
index = 1
for i in range(1, len(num_list)):
    print(f'{num_list[i]}과 {n_max}를 비교합니다.')
    if num_list[i] > n_max:
        print(f'이제 최대값은 {num_list[i]}가 됩니다.')
        n_max = num_list[i]
        index = i + 1
print(n_max)
print(index)