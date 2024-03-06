def hellos(*names):
    print(type(names)) # <class 'tuple'>
    for n in names:
        print(f'{n}님 안녕하세요')
        
hellos('보름달물해파리', '파랑해파리', '노무라입깃해파리')

def hello_player(**players):
    print(type(players)) # <class 'dict'>
    print(players)
    for k,v in players.items():
        print(f'Hello {v}-{k}')
        
hello_player(손흥민 = 'FW', 이강인 = 'MF', 황희찬 = 'MF')