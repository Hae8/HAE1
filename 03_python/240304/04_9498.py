score = int(input())

if 90 <= score <= 100: result = 'A'
elif 80 <= score < 90: result = 'B'
elif 70 <= score < 80: result = 'C'
elif 60 <= score < 70: result = 'D'
else : result = 'F'

print(result)

# # match - case [Like JS switch - case]
# score = int(input()) // 10
# match score:
#     case 10:
#         print('A')
#     case 9:
#         print('A')
#     case 8:
#         print('B')
#     case 7:
#         print('C')
#     case 6:
#         print('D')
#     case _:
#         print('F')