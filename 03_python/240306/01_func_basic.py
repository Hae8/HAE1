# 함수의 정의
def hello1():
    print('안녕하세요')
    
def hello2(name):
    print(f'{name}님 안녕하세요')
    
def hello3(name, count):
    for _ in range(count) :
        print(f'{name}님 안녕하세요')
        
hello1()
hello2(input('이름을 입력하세요: '))
hello3('해파리',3)