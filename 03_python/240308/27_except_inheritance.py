class MyException(Exception):
    def __init__(self):
        super().__init__(self, "재미가 없었나요..? ㅠㅠ")

select = input("파이썬이 재미있으면 1번, 아니면 2번")

try:
    if select == '1':
        print("역시 파이썬은 재미있어~")
    elif select == 2:
        raise MyException
    else:
        print("1번 또는 2번을 입력하세요")
except Exception as e:
    print(e)