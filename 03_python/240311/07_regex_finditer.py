import re

c_obj = re.compile('[a-z]+') # 소문자 하나 이상
match_iter = c_obj.finditer('Pyth0n')
# match_iter = re.finditer('[a-z]+', 'Pyth0n')

print(match_iter) # <callable_iterator object at 0x0000025C1084B2E0>
print(type(match_iter)) # <class 'callable_iterator'>

for match_obj in match_iter:
    print(match_obj)
        # <re.Match object; span=(1, 4), match='yth'>
        # <re.Match object; span=(5, 6), match='n'>
    print(match_obj.group())
        # yth
        # n
    print(match_obj.span())
        # (1, 4)
        # (5, 6)
        
# re.match -> 매치 객체 반환
# re.search -> 매치 객체 반환
# re.findall -> 문자열 리스트 반환
# re.finditer -> 이터레이터: 매치 객체 리스트 반환