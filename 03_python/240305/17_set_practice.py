my_set1 = set([1, 2, 3, 4, 5, 6])
my_set2 = set([4, 5, 6, 7, 8, 9])

합집합1 = my_set1 | my_set2
print(my_set1) # {1, 2, 3, 4, 5, 6}
print(my_set2) # {4, 5, 6, 7, 8, 9}
print(합집합1) # {1, 2, 3, 4, 5, 6, 7, 8, 9}

합집합2 = my_set1.union(my_set2) # my_set1과 my_set2를 합친다.
print(합집합2) # {1, 2, 3, 4, 5, 6, 7, 8, 9}

my_set1.update(my_set2) # my_set1에 my_set2가 합쳐진다.
print(my_set1) # {1, 2, 3, 4, 5, 6, 7, 8, 9}
print(my_set2) # {4, 5, 6, 7, 8, 9}

#-----------------------------------------------------------------------------------

my_set1 = set([1, 2, 3, 4, 5, 6])
my_set2 = set([4, 5, 6, 7, 8, 9])

교집합1 = my_set1 & my_set2
print(교집합1) # {4, 5, 6}

교집합2 = my_set1.intersection(my_set2)
print(교집합2) # {4, 5, 6}

my_set1.intersection_update(my_set2) # my_set1이 my_set2와 공통된 부분으로 업데이트 된다. 
print(my_set1) # {4, 5, 6}
print(my_set2) # {4, 5, 6, 7, 8, 9}

#-----------------------------------------------------------------------------------

my_set1 = set([1, 2, 3, 4, 5, 6])
my_set2 = set([4, 5, 6, 7, 8, 9])

차집합1 = my_set1 - my_set2
print(차집합1) # {1, 2, 3}

차집합2 = my_set1.difference(my_set2)
print(차집합2) # {1, 2, 3}

my_set1.difference_update(my_set2) # my_set1이 my_set2와 다른 부분으로 업데이트 된다. 
print(my_set1) # {1, 2, 3}
print(my_set2) # {4, 5, 6, 7, 8, 9}

#-----------------------------------------------------------------------------------

my_set1 = set([1, 2, 3, 4, 5, 6])
my_set2 = set([4, 5, 6, 7, 8, 9])

대칭차1 = my_set1 ^ my_set2
print(대칭차1) # {1, 2, 3, 7, 8, 9}

대칭차2 = my_set1.symmetric_difference(my_set2)
print(대칭차2) # {1, 2, 3, 7, 8, 9}

my_set1.symmetric_difference_update(my_set2) # my_set1에 my_set2의 대칭차를 업데이트 한다.
print(my_set1) # {1, 2, 3, 7, 8, 9}
print(my_set2) # {4, 5, 6, 7, 8, 9}

#-----------------------------------------------------------------------------------

# add: 요소 추가 (중복 시 들어가지 않는다)
# remove, discard: 요소 삭제 (* remove는 없는 경우 에러 발생)
my_set1.discard(123)
my_set1.remove(123) # KeyError: 123