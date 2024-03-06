def hello(name = '', count = 1):
    if name != '':
        name += ' 님'
    for _ in range(count):
        print(f'{name}안녕하세요')
        
hello()
hello(count=4)
hello(input('이름을 입력하세요: '))
hello('해파리',3)

# 공통된 기능을 하고있다고 판단되면 이렇게 함수를 하나로 묶어줄 수 있다. 