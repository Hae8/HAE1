practice_list = [1,2,3, '파이', 'Apple', ['가', '나', '다', '라']]

print(len(practice_list)) # 6

# '파이'를 3.14로 수정하기
pi_index = practice_list.index('파이')
practice_list[pi_index] = 3.14

print(practice_list) # [1, 2, 3, 3.14, 'Apple', ['가', '나', '다', '라']]

# 3을 4, 8로 수정하기
# practice_list[2] = [4, 8] # 3의 자리에 [4, 8] 요소가 들어온다 
# print(practice_list) # [1, 2, [4, 8], 3.14, 'Apple', ['가', '나', '다', '라']]

practice_list[2:3] = [4, 8]
print(practice_list) # [1, 2, 4, 8, 3.14, 'Apple', ['가', '나', '다', '라']]

# 'Apple'을 삭제하기
apple_index = practice_list.index('Apple')
# practice_list[apple_index] = [] # 'Apple'의 자리에 [] 요소가 들어온다.
practice_list[apple_index:apple_index+1] = [] # 슬라이싱을 이용한 'Apple' 요소 삭제
print(practice_list) # [1, 2, 4, 8, 3.14, ['가', '나', '다', '라']]

# '라' 를 삭제하기
del practice_list[-1][-1]
print(practice_list) # [1, 2, 4, 8, 3.14, ['가', '나', '다']]

# '나', '다'를 삭제하기
del practice_list[-1][1:]
print(practice_list) # [1, 2, 4, 8, 3.14, ['가']]

# 인덱싱은 요소 자체를 반환하지만, 슬라이싱은 요소를 리스트로 묶어서 반환한다.