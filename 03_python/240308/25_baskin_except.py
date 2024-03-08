import random

def baskin_game():
    rand_num = random.randint(1,31)
    
    try:
        while True:
            num = int(input('1부터 31사이의 숫자를 입력하시오: '))
            if num < 1 or num > 31:
                raise Exception(f"범위를 벗어난 입력 : {num}")
            if num == rand_num:
                print('정답')
                break
            else:
                print('up' if num < rand_num else 'down')
    except Exception as e:
        print(e)
        print('프로그램을 재실행 합니다.')
        baskin_game()
        
baskin_game()