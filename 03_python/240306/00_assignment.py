# names = input().split()
# names_dict = {}
# result = set()
# for i in names:
#     if i in names_dict:
#         result.add(i)
#     else:
#         names_dict[i] = 1 # 딕셔너리에 어떤 값을 넣어도 상관이 없다.
# print(result)


# names = input().split()
# double_name = set()
# for name in names:
#     if names.count(name) > 1:
#         double_name.add(name)
# print(double_name)

# user_name = input().split()
# sorted_name = sorted(user_name)
# result = set()
# for i in range(len(sorted_name) - 1):
#     if sorted_name[i] == sorted_name[i+1]:
#         result.add(sorted_name[i])
# print(result)

# name_input = input().split()
# union_name = set()
# same_name = set()
# for name in name_input:
#     if name in union_name:
#         same_name.add(name)
#     else:
#         union_name.add(name)
# print(same_name)