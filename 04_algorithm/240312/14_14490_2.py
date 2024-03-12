import sys

n, m = [int(i) for i in sys.stdin.readline().split(':')]
MAX_NUM = max(n, m)
MIN_NUM = min(n, m)

for i in range(MIN_NUM, 1, -1):
    
    if MAX_NUM % i == 0 and MIN_NUM % i == 0 :
        n //= i
        m //= i
        break
    
print(f'{n}:{m}')

