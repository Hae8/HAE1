f = open('hello.txt', 'a', encoding='utf-8')

for i in range(11, 20+1):
    f.write(f"안녕하세요! {i}\n")
f.close()