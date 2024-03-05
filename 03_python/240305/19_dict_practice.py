name_list = input().split()
name_dict = {}
result = set()
for i in name_list:
    if i in name_dict:
        name_dict[i] += 1
        result.add(i)
    else:
        name_dict[i] = 1
print(result)