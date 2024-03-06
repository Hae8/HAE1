def hello_names(count = 1, *names):
    for name in names:
        print("Hello" * count, name)
        
# hello_names('손흥민', '이강인', '황희찬', 2) # TypeError: can't multiply sequence by non-int of type 'str' - 손흥민을 count로 인식 ERROR
hello_names(2, '손흥민', '이강인', '황희찬') # 정상 - 기본값 매개변수를 사용했음에도 쓸 수 없게 되었다.
    # HelloHello 손흥민
    # HelloHello 이강인
    # HelloHello 황희찬
# hello_names(count = 2, '손흥민', '이강인', '황희찬') # SyntaxError: positional argument follows keyword argument - 문법 상 키워드 매개변수는 뒤에 있어야 한다.
# hello_names('손흥민', '이강인', '황희찬', count = 2) # TypeError: hello_names() got multiple values for argument 'count' - 매개변수 입력 순서가 틀렸다.
# hello_names('손흥민', '이강인', '황희찬') # TypeError: can't multiply sequence by non-int of type 'str' - 손흥민을 count로 인식 ERROR