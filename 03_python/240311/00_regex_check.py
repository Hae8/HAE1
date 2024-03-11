from regex_check import match_check as mc

mc('[abc]', 'alphabet') # T
mc('[a-c]', 'alphabet') # T
mc('[abc]', 'liberty')  # T
mc('[abc]', 'digit') # F

print('-----------------------------------------------')

mc('[0-9]', '123') # T
mc('\d', '123') # T
mc('[^0-9]', '123') # F
mc('\D', '123') # F
mc('[0-9]', 'number') # F

print('-----------------------------------------------')

mc('[a-z]', 'Alphabet') # T
mc('[a-z]', 'ALPHABET') # F
mc('[a-zA-Z]', 'Alphabet') # T
mc('[^a-zA-Z]', 'Alphabet')  # F

print('-----------------------------------------------')

mc('[a-zA-Z0-9]', 'Hae8ii') # T
mc('\w', 'Hae8ii') # T
mc('[^a-zA-Z0-9]', 'Hae8ii') # F
mc('\W', 'Hae8ii') # F

print('-----------------------------------------------')

mc('\s', 'Hello World') # T
mc('\s', 'HelloWorld') # F
mc('\S', 'Hello World') # T  # --공백이 있어도 공백 외의 문자열이 존재하기 때문에 매치가 된다.
mc('\S', 'HelloWorld') # T

print('-----------------------------------------------')

mc('[ㄱ-힣]', '해파리ㅋㅋ') # T
