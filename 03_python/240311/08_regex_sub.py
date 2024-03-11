import re

# 정규표현식에서 대체하기
target = 'aabbcc'
result = re.sub('[^a]', "", target)
print(result) # aa