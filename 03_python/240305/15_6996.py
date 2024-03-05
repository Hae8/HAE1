word = "apple"

d_word = {}
for i in word:
    if i in d_word:
        d_word[i] += 1
    else:
        d_word[i] = 1
        
print(d_word) # {'a': 1, 'p': 2, 'l': 1, 'e': 1}

# 애너그램
CASE_NUM = int(input())

for _ in range (CASE_NUM):
    word_a, word_b = input().split()
    
    # word_a를 이용한 딕셔너리 생성
    d_word_a = {}
    for i in word_a:
        if i in d_word_a:
            d_word_a[i] += 1
        else:
            d_word_a[i] = 1
    
    # word_b를 이용한 딕셔너리 생성
    d_word_b = {}
    for i in word_b:
        if i in d_word_b:
            d_word_b[i] += 1
        else:
            d_word_b[i] = 1
    
    if d_word_a == d_word_b:
        print(f'{word_a} & {word_b} are anagrams.')
    else:
        print(f'{word_a} & {word_b} are NOT anagrams.')