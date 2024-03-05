# range 함수는 반복객체(제너레이터)를 반환합니다.

print('range(0, 10) ->', list(range(0, 10)))
print('range(10) ->', list(range(10)))
print('range(4, 10) ->', list(range(4, 10)))
print('range(1, 10, 3) ->', list(range(1, 10, 3)))
print('range(10, 1, -3) ->', list(range(10, 1, -3)))

for i in range(10,1,-3):
    print(i)