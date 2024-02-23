name=input('이름을 입력해주세요:')
rank=int(input('현재 직급을 입력해주세요 (부장:5, 과장:4, 대리:3, 사원:2, 인턴:1):'))
         
if rank == 1 :
    print('%s의 연봉은 1,000만 원입니다.' %name)
elif rank == 2 :
    print('%s의 연봉은 3,000만 원입니다.' %name)
elif rank == 3 :
    print('%s의 연봉은 4,000만 원입니다. '%name)
elif rank == 4 :
    print('%s의 연봉은 6,500만 원입니다. '%name)
elif rank == 5 :
    print('%s의 연봉은 9,000만 원입니다.' %name)
else:
    print('잘못 입력된 번호입니다.')
