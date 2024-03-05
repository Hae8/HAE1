empty_set = set()
print(empty_set) # set()

my_set1 = set([1, 2, 3, 4, 5])
my_set2 = set([3, 1, 2, 5, 4])
print(my_set1) # {1, 2, 3, 4, 5}
print(my_set2) # {1, 2, 3, 4, 5}
print(my_set1 == my_set2) # True

str_set = set('Python is Interesting')
print(str_set) # {'r', 'e', 'P', 't', ' ', 'n', 'i', 'h', 's', 'y', 'I', 'o', 'g'}