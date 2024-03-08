import math, random

print(math) # <module 'math' (built-in)> -> math 모듈은 내장된 모듈이다.
print(random) # <module 'random' from 'D:\\python\\Lib\\random.py'> -> random 모듈은 파이썬 라이브러리 내에 위치한 모듈이다.

print('------------------------------------------------------------------')

print(type(math)) # <class 'module'>
print(type(random)) # <class 'module'>

print(dir(math))
print(dir(random))

print(math.pi) # 3.141592653589793 -> math 모듈에 있는 파이 변수
print(math.sqrt(9)) # 3.0 -> math 모듈에 있는 제곱근 구하는 함수

area = 78.539_816_339_744_83 # 원의 넓이 (pi * r²)
print(f'반지름은 {math.sqrt(area / math.pi)} 이다.') # 반지름은 5.0 이다.