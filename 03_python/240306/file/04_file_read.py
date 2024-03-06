f = open('hello.txt', 'r', encoding='utf-8')
line = f.readline()
print(line)
f.close()