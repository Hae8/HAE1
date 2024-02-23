ss=input("값을 입력해주세요:")

if ss.isalpha()==True:
    print('글자입니다.')
elif ss.isdigit()==True:
    print('숫자입니다.')
elif ss.isalnum()==True:
    print('글자+숫자입니다.')
else:
    print('모르겠습니다.')
