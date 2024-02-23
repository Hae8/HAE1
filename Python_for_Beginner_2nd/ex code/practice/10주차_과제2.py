n=int(input('정수입력:'))

def Rabbit(num):
    if num==0:
        return num
    elif num==1:
        return num
    else:
        return Rabbit(num-1)+Rabbit(num-2)

print(Rabbit(n))
