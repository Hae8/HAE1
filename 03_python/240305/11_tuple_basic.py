empty_tuple = ()
print(empty_tuple) # ()
print(type(empty_tuple)) # <class 'tuple'>

my_int = (1)
print(type(my_int)) # <class 'int'>

my_tuple = (1,)
print(type(my_tuple)) # <class 'tuple'>

my_tuple1 = (1, 2, 3)
my_tuple2 = 1, 2, 3
print(type(my_tuple1)) # <class 'tuple'>
print(my_tuple1 == my_tuple2) # True

my_tuple3 = ('a', 'b', 'c', 'd')
print(my_tuple3[0]) # a
print(my_tuple3[1:]) # ('b', 'c', 'd')

# 튜플은 삭제, 수정 불가능!
## my_tuple3[1] = 'B' # TypeError: 'tuple' object does not support item assignment
##del my_tuple3[1] # TypeError: 'tuple' object doesn't support item deletion

my_tuple4 = (1, 2, 4, 8)
odd, *even = my_tuple4 # *을 붙이니, 리스트가 되었다!
print(odd, even) # 1 [2, 4, 8]