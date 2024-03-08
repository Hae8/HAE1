# OOP : Object Oriented Programming (객체 지향 프로그래밍)

class Animal:
    # 생성자
    def __init__(self, name = 'unnamed', age = 0) :
        self.name = name
        self.age = age
    
    # 클래스 변수
    
    # 클래스 함수
    def info(self):
        print(f'name: {self.name}, age: {self.age}')
        
    # 인스턴스 함수

pig = Animal('꿀꿀이', 5) 
pig.info() # name: 꿀꿀이, age: 5

panda = Animal('푸바오', 10)
panda.info() # name: 푸바오, age: 10

class Human(Animal):
    def speak(self, data):
        print(f'{self.name} : {data}')

son = Human('손흥민', 30)
son.info() # name: 손흥민, age: 30
son.speak('안녕하세요?') # 손흥민 : 안녕하세요?

print(isinstance(pig, object)) # True
print(isinstance(pig, Animal)) # True
print(isinstance(pig, Human)) # False

print(isinstance(son, object)) # True
print(isinstance(son, Animal)) # True
print(isinstance(son, Human)) # True