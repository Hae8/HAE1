# from math import pi, sqrt # pi, sqrt값이 변수명과 겹쳐 변경될 위험이 있다.
# from math import * # math 모듈 내의 값을 전부 가져오므로, 함수명과 변수명이 겹치거나, 함수가 올바르게 작동하지 않는 등의 문제가 있을 수 있다.

# 권장하는 방식
import math

PI = math.pi


print(PI)
# print(sqrt(9)) 



