from regex_check import match_check as mc

mc('go*d','gd') # T
mc('go*d','god') # T
mc('go*d','good') # T

print('-----------------------------------------------')

mc('go+d','gd') # F
mc('go+d','god') # T
mc('go+d','good') # T

print('-----------------------------------------------')

mc('g[A-Z]+d','gooooooooooooooood') # F
mc('g[A-Z]+d','gOOOOOOOOOOOOOOOOd') # T

print('-----------------------------------------------')

mc('g[A-Z]+d','gABCd') # T
mc('g[A-Z]+d','gAbCd') # F