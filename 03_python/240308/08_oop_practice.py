# OOP : Object Oriented Programming (객체지향 프로그래밍)

# 전자제품(ElecProduct) 클래스
#   [product_name: 상품명, price: 가격]
#   [info() : 상품명과 가격을 출력하는 메서드]

class ElecProduct:
    def __init__(self, product_name = 'unknown', price = 0):
        self.product_name = product_name
        self.price = price
    
    def info(self):
        print(f'{self.product_name}는 {self.price}원 입니다.')

# 스마트폰(SmartPhone) 클래스 - (ElecProduct) 클래스 상속
#   [phone_name: 폰이름, volumn: 용량]
#   [call() : '여보세요'를 출력하는 메서드]
#   [info() : 가격과 상품명, 폰이름, 용량까지 출력하는 메서드] - 오버라이딩

class SmartPhone(ElecProduct):
    def __init__(self, product_name = 'unnamed_phone', price = 0, phone_name = 'null', color = 'starlight', volumn = 0):
        self.phone_name = phone_name
        self.color = color
        self.volumn = volumn
        super().__init__(product_name, price) # 부모 생성자 호출
        
    def call(self):
        print('여보세요')
    
    def info(self): # 오버 라이딩
        print(f'{self.product_name} 중 {self.phone_name}, {self.color}색상, {self.volumn}용량의 기기는 {self.price}원 입니다.')


ep = ElecProduct('JBL flip 4', 100000)
ep.info()

iphone = SmartPhone('스마트폰', 3000000, 'iphone 15 pro max', 'Graphite', '256 GB')
iphone.call()
iphone.info()

print(isinstance(ep, ElecProduct)) # True
print(isinstance(ep, SmartPhone)) # False
print(isinstance(iphone, ElecProduct)) # True
print(isinstance(iphone, SmartPhone)) # True