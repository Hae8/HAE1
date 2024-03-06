f = open("hello.txt", "r", encoding='utf-8')

while True:
    line = f.readline()
    if not line:
        break
    print(line.strip())

f.close()