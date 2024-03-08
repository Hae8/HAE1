def divisor_game(number):

    try:
        num = int(input(f'{number}의 약수를 입력하세요'))
        if number % num == 0:
            print('맞습니다.')
        else:
            print('틀립니다.')
    except ValueError as e:
        print('정수 형태로 입력하지 않아, 프로그램을 종료합니다.', e)
    except ZeroDivisionError as e:
        print('0으로는 나눌 수 없어, 프로그램을 한번 더 실행합니다.')
        divisor_game(number)
    except:
        print('알 수 없는 에러 발생', e)
    else: # except를 만나지 않고, try가 무사히 실행되었을 때, 실행된다.
        print('게임 종료')
    finally: # except 발생 여부와 상관없이 무조건 실행된다.
        print('확실한 종료')

divisor_game(100)