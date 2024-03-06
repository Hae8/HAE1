f = open("hello.txt", "w", encoding='utf-8')
for i in range (1, 10+1):
    f.write(f"안녕하세요! {i}\n")
f.close()