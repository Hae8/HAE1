def get_natural_num():
    n = 0
    while True:
        n += 1
        yield n
        
n_num = get_natural_num()

print(n_num, type(n_num)) # <generator object get_natural_num at 0x00000201089147C0> <class 'generator'>

for _ in range (10):
    print(next(n_num))
    
for _ in range (10):
    print(next(n_num))