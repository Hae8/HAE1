# msg = int(input('숫자를 입력하세요\n'))

# if msg >= 50 :
#     print('큰 수 입니다.')
# else :
#     print('낮은 수 입니다.')

msg = 100
if msg: # if msg != 0:
    print('T')
else :
    print('F')

print("bool(0) ->", bool(0)) # F
print("bool(1) ->", bool(1)) # T
print("bool(-1) ->", bool(-1)) # T

print("bool(0.0) ->", bool(0.0)) # F
print("bool(0.5) ->", bool(0.5)) # T
print("bool(-0.5) ->", bool(-0.5)) # T

print("bool('') ->", bool('')) # F
print("bool('문자열') ->", bool('문자열')) # T
print("bool(' ') ->", bool(' ')) # T