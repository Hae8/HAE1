name_list = input().split()

name_dict = {}
result = set()

for i in name_list:
    if i in name_dict: # 딕셔너리에 이미 있을 때
        result.add(i) # set의 특징을 사용하여 추가할 수 있다.
    else: # 딕셔너리에 하나도 없을 때
        name_dict[i] = 1 # 딕셔너리에 어떤 값을 넣어도 상관없다
print(result)

# user_name = input().split()
# sorted_name = sorted(user_name)
# result = set()
# for i in range(len(sorted_name)-1):
#     print(sorted_name[i], sorted_name[i+1])
#     if sorted_name[i] == sorted_name[i+1]:
#         result.add(sorted_name[i])
# print(result) << 재미있는 방식..