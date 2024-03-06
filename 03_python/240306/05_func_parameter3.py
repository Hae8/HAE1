def hello_names(*names, count = 1): # 가변 매개변수가 앞으로 오도록 사용한다.
    for name in names:
        print("Hello" * count, name)
        
# hello_names('손흥민', '이강인', '황희찬', 2) # 2를 names의 일부로 인식하는 문제
    # Hello 손흥민
    # Hello 이강인
    # Hello 황희찬
    # Hello 2
# hello_names(2, '손흥민', '이강인', '황희찬') # 2를 names의 일부로 인식하는 문제
    # Hello 2
    # Hello 손흥민
    # Hello 이강인
    # Hello 황희찬
# hello_names(count = 2, '손흥민', '이강인', '황희찬') # SyntaxError: positional argument follows keyword argument - 문법 상 키워드 매개변수는 뒤에 있어야 한다.
hello_names('손흥민', '이강인', '황희찬', count = 2) # 정상
hello_names('손흥민', '이강인', '황희찬') # 정상