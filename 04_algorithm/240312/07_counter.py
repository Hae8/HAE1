from collections import Counter

student_list = ['a','b','c','a','a','c','c','a']
student_counter = Counter(student_list)
print(student_counter)
print(student_counter.most_common()) # 순서가 있는 리스트로 결과를 반환한다.
print(student_counter.most_common(2))