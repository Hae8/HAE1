print(object) # <class 'object'>

obj = object()
print(obj) # <object object at 0x0000019243878230>

# object가 가진 모든 속성 출력
print(dir(object)) # ['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']

class Animal:
    name = '동물'
    age = 0

# Animal이 가진 모든 속성 출력
print(dir(Animal)) # ['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'age', 'name']

# Animal에서 object가 가진 차집합 속성 출력
print(set(dir(Animal)) - set(dir(object))) # {'age', '__dict__', '__weakref__', '__module__', 'name'} - > '__dict__', '__weakref__', '__module__'는 파이썬 내부에서 클래스를 추가할 때 자동으로 추가하는 것이다.

# Animal과 object의 교집합 속성이 object가 가진 모든 속성과 같은가?
print(set(dir(Animal)) & set(dir(object)) == set(dir(object))) # True