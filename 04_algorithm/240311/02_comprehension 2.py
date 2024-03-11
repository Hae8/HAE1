prod_list = ['애플 아이폰', '삼성 갤럭시', '애플 아이패드', '삼성 갤럭시탭', '애플 에어팟', '삼성 버즈']

sam_list = [prod.split()[1] for prod in prod_list if prod.split()[0] == '삼성']
print(sam_list)

apple_list = [prod.split()[1] for prod in prod_list if prod.split()[0] == '애플']
print(apple_list)

sam_dict = {prod_list[i] : i for i in range (len(prod_list)) if prod_list[i][:2] == '삼성'}
print(type(sam_dict),sam_dict)

