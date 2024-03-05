son_dict = {
    'name' : '손흥민',
    'age' : 29,
    'address' : ['대한민국', '영국', '독일']
}

# key들을 모아 반환
print(son_dict.keys()) # dict_keys(['name', 'age', 'address'])
for i in son_dict.keys():
    print(i)
        # name
        # age
        # address
        
# value들을 모아 반환
print(son_dict.values()) # dict_values(['손흥민', 29, ['대한민국', '영국', '독일']])

# key와 value를 각각 튜플로 묶어서 반환
print(son_dict.items()) # dict_items([('name', '손흥민'), ('age', 29), ('address', ['대한민국', '영국', '독일'])])

print(son_dict.get('name')) # 손흥민
print(son_dict.get('job')) # 없으면: None
print(son_dict.get('job', '무직')) # 없으면 기본값 출력: 무직
#print(son_dict['job']) # 없으면: KeyError: 'job'

for i in son_dict.items():
    print(i)
        # ('name', '손흥민')
        # ('age', 29)
        # ('address', ['대한민국', '영국', '독일'])
        
for k, v in son_dict.items():
    print(f'키: {k}, 값: {v}')
        # 키: name, 값: 손흥민
        # 키: age, 값: 29
        # 키: address, 값: ['대한민국', '영국', '독일']
        
son_dict.clear()
print(son_dict) # {}
