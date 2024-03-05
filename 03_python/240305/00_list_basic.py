alphabet = ['A', 'B', 'C', 'D', 'E']

# vow = alphabet[0:5:4]
# vow = alphabet[::4]
vow = [alphabet[0], alphabet[4]] # 인덱싱
consonant = alphabet[1:4] # 슬라이싱

new_alphabet = [vow, consonant] 
print(new_alphabet) # [['A', 'E'], ['B', 'C', 'D']]

# new_alphabet에서 'E'를 추출하고 싶어요
# print(new_alphabet[0][-1])
print(new_alphabet[0][1]) # E