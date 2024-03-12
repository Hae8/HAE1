# my_dict = {
#     'uid1234': 'Prodo',
#     'uid4567': 'Ryan'
# }
# print(my_dict['uid8901']) # 없는 경우에, keyError

from collections import defaultdict

my_dict = defaultdict(int)

my_dict['first'] = 1
my_dict['second'] = 2
my_dict['third'] += 3

print(my_dict['third']) # 없을 시 키 에러를 반환하지 않고 기본값 0을 반환한다.