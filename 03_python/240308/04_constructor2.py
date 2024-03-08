# OOP : Object Oriented Programming (객체 지향 프로그래밍)

class Animal:
    # 생성자
    def __init__(self, name = 'unnamed', age = 0) :
        self.name = name
        self.age = age
    
    # 클래스 변수
    
    # 클래스 함수
    def info(self):
        print(f'{self.name}는 {self.age}살 입니다.')
        
    # 인스턴스 함수

pig = Animal('꿀꿀이', 5) 
pig.info() # 꿀꿀이는 5살 입니다.

panda = Animal('푸바오', 10)
panda.info() # 푸바오는 10살 입니다.

monkey = Animal()
monkey.info() # unnamed는 0살 입니다.