def get_gender(data:str):
    
    gender_num = int(data[6])
    
    if gender_num % 2:
        return '남자'
    return '여자'

def get_birth(data:str) -> tuple:
    
    gender_num = int(data[6])
    year = data[0:2]
    month = data[2:4]
    day = data[4:6]
    
    year = '20' + year if gender_num >= 3 else '19' + year
    return int(year), int(month), int(day)

if __name__ == "__main__":
    rrn_num = input("주민번호를 입력하세요").replace('-','') 
    print(get_gender(rrn_num))
    print(get_birth(rrn_num))
