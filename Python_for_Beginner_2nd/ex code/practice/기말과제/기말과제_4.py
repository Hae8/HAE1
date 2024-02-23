import random

while True:
    contin= input("동전 던지기를 계속하시겠습니까?(yes,no)")
    if contin == 'no':
        break
    else:
        coin = random.randrange(2)
        if coin == 0:
            print('head')
        else:
            print('tail')
            
