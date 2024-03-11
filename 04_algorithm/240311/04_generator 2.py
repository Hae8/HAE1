import sys

a = [n for n in range(100000)] # 이미 생성되어 값이 담겨있다.
b = range(100000) # 제너레이터 객체 : 생성한다는 조건만 있다. - 몇 개를 생성하던 용량은 똑같기 때문에 메모리 효율이 좋다.

print(len(a) == len(b)) # True
print(sys.getsizeof(a)) # 800984
print(sys.getsizeof(b)) # 48