import random
rand_num = random.randint(1, 31)

while True:
    user_num = int(input())
    if user_num < rand_num:
        print('up')
    elif user_num > rand_num:
        print('down')
    else:
        print('congratulation!')
        break