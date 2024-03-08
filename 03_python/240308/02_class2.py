# OOP : Object Oriented Programming (객체 지향 프로그래밍)

class Animal:
    # 클래스 변수
    age = 1
    
    # 클래스 함수
    def set_name(self,data):
        self.name = data
        
    # 생성자
    # 인스턴스 함수

pig = Animal() 
pig.set_name('꿀꿀이')

panda = Animal()
Animal.set_name(panda, '푸바오')

pig.age = 5
panda.age = 10

print(f'{pig.name}는 {pig.age}살 입니다.') # 꿀꿀이는 5살 입니다.
print(f'{panda.name}는 {panda.age}살 입니다.') # 푸바오는 10살 입니다.