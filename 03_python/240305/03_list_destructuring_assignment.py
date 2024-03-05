hong_info = ['홍길동', 10]
name,age = hong_info
print(name,age) # 홍길동 10

eight_divior = [1, 2, 4, 8]
odd, *even = eight_divior
print(odd, even) # 1 [2, 4, 8]

yoo_info = ['유재석', 'TMI1', 30, 'TMI2', '서울 강남구']
name, _, age, _, address = yoo_info
print(name, age, address, _) # 유재석 30 서울 강남구 TMI2

park_info = ['박서준', 'TMI1', 'TMI2', 'TMI3', '이태원클라쓰']
name,*_, work = park_info
print(name, work, _) # 박서준 이태원클라쓰 ['TMI1', 'TMI2', 'TMI3']