import re

c_obj = re.compile('[a-z]+') # 소문자 하나 이상
print(c_obj) # re.compile('[a-z]+')
print(type(c_obj)) # <class 're.Pattern'>

# print('-----------------------------------------------')

obj = c_obj.match('python')
print(obj) # <re.Match object; span=(0, 6), match='python'>
print(type(obj)) # <class 're.Match'>

print('-----------------------------------------------')

obj = re.search('[a-z]+', 'Python') # search : 문자열을 전체 검사

print(obj.span()) # (1, 6) - 튜플로 반환
print(obj.start()) # 1
print(obj.end()) # 6
print(obj.group()) # ython

# 내 obj가 어디서부터 어디까지 정규식에 부합하는지 알려준다.