word = 'apple'
word = 'orange'

print(id(word), id('apple'), id('orange'))
print(word == 'orange') # True
print(word is 'orange') # True