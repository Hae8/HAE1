def get_many_type_data():
    while True:
        yield 1
        yield '문자열'
        yield False

data = get_many_type_data()

for _ in range(10):
    print(next(data))