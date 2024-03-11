def long_method(a, b):
    
    c = 1000
    d = 2000
    
    # ... (엄청 긴 함수)
    
    import pprint
    pprint.pprint(locals()) # 함수 스코프에서의 변수 정보 모두 조회
        # {'a': 2,
        # 'b': 3,
        # 'c': 1000,
        # 'd': 2000,
        # 'pprint': <module 'pprint' from 'D:\\python\\Lib\\pprint.py'>}

    return a+b+c+d

print(long_method(2,3))