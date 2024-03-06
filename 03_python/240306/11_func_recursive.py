# def 함수이름 (매개변수):
#     if 매개변수가 종료 조건에 부합
#     return 결과값
#     ...
#     함수 이름(변경된 입력값) -> 함수 내에서 자기 자신을 호출한다.
#     return 결과값
# 
# 함수이름(입력값)

def recursion_sum(num):
    if num == 1:
        return 1
    result = recursion_sum(num - 1)
    return num + result

print(recursion_sum(5)) # 15
# 5+rs(4) = (5+4+3+2+1) = 15
# 4+rs(3) ↺
# 3+rs(2) ↺
# 2+rs(1) ↺
# 1 ↺

def recursion_multiply(num):
    if num == 1:
        return 1
    result = recursion_multiply(num - 1)
    return num * result

print(recursion_multiply(5)) # 120 (5*4*3*2*1)