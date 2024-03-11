from regex_check import match_check as mc

mc("hel{2}o", 'hello')  # T

print('-----------------------------------------------')

mc("hel{1,3}o", "heo")  # F
mc("hel{1,3}o", "helo")  # T
mc("hel{1,3}o", "hello")  # T
mc("hel{1,3}o", "helllo")  # T
mc("hel{1,3}o", "hellllo")  # F

print('-----------------------------------------------')

mc('hell?o', 'helo')  # T
mc('hell?o', 'hello')  # T
mc('hell?o', 'helllo')  # mc('hell{0,1}o','helllo') # F

print('-----------------------------------------------')

mc('hel{,3}o', 'heo')  # T
mc('hel{,3}o', 'helo')  # T
mc('hel{,3}o', 'hello')  # T
mc('hel{,3}o', 'helllo')  # T
mc('hel{,3}o', 'hellllo')  # F

print('-----------------------------------------------')

mc('hel{3,}o', 'hello')  # F
mc('hel{3,}o', 'helllo')  # T
mc('hel{3,}o', 'hellllo')  # T

print('-----------------------------------------------')

mc("go{0,}d", 'gd')  # mc("go*d", 'gd') # T
mc("go{1,}d", 'gd')  # mc("go+d", 'gd') # F