f = open('hello.txt', 'r', encoding='utf-8')

data = f.read() # 파일 전체를 가져올 수 있다. - 파일의 크기가 너무 클 경우 메모리에 부담이 될 수 있다.
print(data)

f.close()