f = open('hello.txt', 'r', encoding='utf-8')

for line in f: # 파일 자체를 반복객체로 가져올 수 있다.
    print(line.strip())

f.close()