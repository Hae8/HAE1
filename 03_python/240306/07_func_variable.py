import sys
new_input = sys.stdin.readline
data = new_input().strip()
print(data) # 엔터를 치고 입력이 끝나기 때문에 입력값에 엔터가 들어가는 문제가 있다. -> .strip()을 붙여 문제 해결

def sayHello():
    print('안녕')
sh = sayHello
sh()

def plus (a, b):
    return a + b

def minus (a, b):
    return a - b

clac_list = [ plus, minus ]
print(clac_list[0](10, 20)) # 30
print(clac_list[1](10, 20)) # -10

calc_dict = {'합':plus, '차':minus}
print(calc_dict['합'](20, 30)) # 50
print(calc_dict['차'](20, 30)) # -10