def robot (calc_func):
    print('삐리릭--삐삑! 로봇 계산기입니다.')
    num1 = int(input('첫 번째 숫자를 입력하세요!'))
    num2 = int(input('두 번째 숫자를 입력하세요!'))
    print('치지직-- 삐삑! 삐삑!!')
    result = calc_func (num1, num2)
    print('...휴...계산 결과는?')
    print(f'{result}')

def plus (a, b):
    return a + b

def minus (a, b):
    return a - b

robot(plus)
robot(minus)