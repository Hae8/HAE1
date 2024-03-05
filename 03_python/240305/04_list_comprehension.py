# List Comprehension
# 리스트 = [변수를활용한값 for 사용한변수명 in 반복객체]

num_list = [1, 2, 3, 4]
# even_list = []
# for e in num_list:
#    even_list.append(e * 2)
even_list = [e * 2 for e in num_list]

print(even_list) # [2, 4, 6, 8]