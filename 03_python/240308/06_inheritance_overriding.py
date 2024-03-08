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

class Human(Animal):
    def __init__(self, name = '아무개', age = 0, job = 'unemployed'): # 이곳에서도 자식 클래스의 기본값을 지정해줄 수 있다.
        self.job = job
        
        super().__init__(name, age) # 부모 클래스의 생성자 init을 가져온다. 자식 클래스의 기본값도 지정해 줄 수 있다.
        
    def speak(self, data):
        print(f'{self.name} : {data}')
        
    def info(self):
        print(f'name: {self.name}, age: {self.age}, job: {self.job}') 

son = Human('손흥민', 30, '축구선수')
son.info() # name: 손흥민, age: 30, job: 축구선수
son.speak('안녕하세요?')  # 손흥민 : 안녕하세요?

# 다형성 - 오버라이딩: 같은 이름의 메서드를 다른 클래스에서 다르게 구현하는 것.