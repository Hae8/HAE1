import re

match_obj = re.search(
    '([가-힣]{2,4})\s+(010[-]\d{4}[-]\d{4})',
    '홍길동 010-1234-5678'
)

print(match_obj) # <re.Match object; span=(0, 17), match='홍길동 010-1234-5678'>
print(match_obj.group()) # 홍길동 010-1234-5678
print(match_obj.group(0)) # 홍길동 010-1234-5678
name = match_obj.group(1) # 홍길동
tel = match_obj.group(2) # 010-1234-5678

