rainbow = ['빨강', '주황', '노랑', '초록', '파랑', '남', '보라']

rainbow_color = [color+'색' for color in rainbow]
print(rainbow_color) # ['빨강색', '주황색', '노랑색', '초록색', '파랑색', '남색', '보라색']

color_i = [i[0] for i in rainbow_color]
print(color_i) # ['빨', '주', '노', '초', '파', '남', '보']

rainbow_dict = {i : 1 for i in color_i}
print(rainbow_dict) # {'빨': 1, '주': 1, '노': 1, '초': 1, '파': 1, '남': 1, '보': 1}

obj_list = ['애플 아이폰', '삼성 갤럭시', '애플 아이패드', '애플 에어팟', '삼성 비스포크']

apple_list = [obj.split()[1] for obj in obj_list if obj.split()[0] == '애플']
print(apple_list) # ['아이폰', '아이패드', '에어팟']