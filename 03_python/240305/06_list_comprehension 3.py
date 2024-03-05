# List Comprehension
# 리스트 = [변수를활용한값 for 사용한변수명 in 반복객체]

# 숫자 세 개를 입력받고 평균을 반환하는 프로그램 만들기
## user_input = input('공백을 기준으로 숫자 세 개를 입력하세요\n')
## print(type(user_input)) # <class 'str'>
## user_input_list = user_input.split()
## 
## number_list = []
## for i in user_input_list:
##     number_list.append(int(i))
## 
## sum = 0
## for i in number_list:
##    sum += i
##    
## avg = sum / len(number_list)
## print(avg)

# 세 줄로 압축할 수 있다.
number_list = [int(i) for i in input('숫자 세 개를 입력하세요\n').split()]
avg = sum(number_list) / len(number_list)
print(avg)