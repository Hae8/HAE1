import sys
new_input = sys.stdin.readline()
A, B, V = [int(i) for i in new_input.split()]

def snail_slow_up(A, B, V):
    snail = 0
    day = 0
    while True:
        snail += A
        day += 1
        if snail >= V:
            return day
        else: snail -= B
    
print(snail_slow_up(A, B, V))

import math
def snail_fast_up(A, B, V):
    every_day = A - B
    real_v = V - B
    day = real_v / every_day
    # if real_v % every_day:
    #     day = real_v // every_day + 1
    # else:
    #     day = real_v // every_day
    return (math.ceil(day))

print(snail_fast_up(A, B, V))