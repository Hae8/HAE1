rainbow = ['빨', '주', '노', '초', '파', '남', '보']

for i in range(len(rainbow)):
    print(i, rainbow[i])

enum_rainbow = enumerate(rainbow)
print(list(enum_rainbow)) # 리스트 안에 튜플로 인덱스와 값이 동시에 반환된다.

# for i in enum_rainbow:
#     print(i)
#     a, b = i # 구조 분해 할당
#     print(a)
#     print(b)
    
for a, b in enum_rainbow:
    print(a, b)