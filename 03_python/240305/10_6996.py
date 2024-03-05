# 애너그램
CASE_NUM = int(input())

for _ in range (CASE_NUM):
    word_a, word_b = input().split()
    print(word_a, word_b) # 문자열은 immutable 불변객체
    if sorted(word_a) == sorted(word_b):
        print(f'{word_a} & {word_b} are anagrams.')
    else:
        print(f'{word_a} & {word_b} are NOT anagrams.')