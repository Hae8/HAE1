k_movie = ['파묘', '서울의 봄']
movie = ['웡카', '아가일', k_movie]

# my_movie = movie
# print(my_movie == movie) # True
# print(my_movie is movie) # True
# my_movie.append('태양은 없다')
# print(movie) # ['웡카', '아가일', ['파묘', '서울의 봄'], '태양은 없다']
#     # 원본이 보존되지 않는다!

# 얕은 복사 # JS : my_movie = [...movie]
# my_movie = movie[:]
# print(my_movie == movie) # True
# print(my_movie is movie) # False
# my_movie.append('태양은 없다')
# print(my_movie) # ['웡카', '아가일', ['파묘', '서울의 봄'], '태양은 없다']
# print(my_movie[2] == movie[2]) # True
# print(my_movie[2] is movie[2]) # True

# k_movie.append('올드보이')
# print(my_movie, movie) # 객체 안의 객체는 복사가 되지 않고 복제가 되었다.

# 깊은 복사
import copy
my_movie = copy.deepcopy(movie)
print(my_movie is movie) # False
print(my_movie[2] is movie[2]) # False
k_movie.append('올드보이')
print(my_movie, movie) # 객체 안의 객체까지 복사가 되어 따로 기능한다.