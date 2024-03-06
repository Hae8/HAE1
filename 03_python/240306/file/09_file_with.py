# close를 자동으로 해주는 구문
# with open() as f:

with open('with.txt', 'w', encoding='utf-8')as f:
    f.write("현재 블록을 벗어나는 순간, f는 자동으로 close 된다.")