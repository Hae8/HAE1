# 일반적인 함수
def func1(x): print(x)
func1('일반 함수 출력')

# 람다 함수 - 함수명이 존재하지 않는 익명 함수
func2 = lambda x: print(x)
func2('람다 함수 출력')

# 일반적인 함수를 만들고 호출해 쓰는 방식
def sort_func(x):
    return x.split()[1], x.split()[0] # 정렬의 우선 순위를 정해줄 수 있다.

s1 = ['5 A', '2 C', '1 A', '4 D', '3 B']
print(sorted(s1, key = sort_func))

# 람다 함수를 쓰는 방식 - 일회적으로 함수를 사용할 때 쓰면 좋다
s2 = ['5 A', '2 C', '1 A', '4 D', '3 B']
print(sorted(s2, key = lambda x: (x.split()[1], x.split()[0])))

#-----------------------------------------------------------------------------------------#

name_list = [
    '김길동 50 50', 
    '최길동 80 20', 
    '홍길동 90 20', 
    '이길동 60 40', 
    '박길동 30 60', 
    '나길동 60 70', 
] # 나 홍 김 이 최 박

# 국어, 수학 점수 합계가 높은 순서대로 정렬 (단, 점수가 같다면 이름순 정렬)
print(sorted(name_list, key = lambda x: (-1*(int(x.split()[1])+int(x.split()[2])), x.split()[0])))