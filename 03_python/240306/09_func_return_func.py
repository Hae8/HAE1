def say_hello():
    nation = input("국적을 입력하세요! --> ")
    if nation.lower() == 'korea' or nation == '한국':
        return hello_korean()
    else:
        return hello_english()
    
def hello_korean():
    print('안녕하세요!')
    
def hello_english():
    print('Hello!')

say_hello()