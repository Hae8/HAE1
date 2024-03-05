empty_dict1 = {}
empty_dict2 = dict()
print(empty_dict1, empty_dict2) # {} {}

son_dict = {
    'name' : '손흥민',
    'age' : 29,
    'address' : ['대한민국', '영국', '독일']
}
print(son_dict) # {'name': '손흥민', 'age': 29, 'address': ['대한민국', '영국', '독일']} 

# 키를 통한 값 조회
print(son_dict['name']) # 손흥민

# 딕셔너리에 데이터 추가
son_dict['job'] = '축구선수'

# 딕셔너리 내 값 수정
son_dict['name'] = 'son'

# 딕셔너리 내 데이터 삭제
del son_dict['address']

print(son_dict) # {'name': 'son', 'age': 29, 'job': '축구선수'}