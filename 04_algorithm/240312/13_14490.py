import sys

N, M = [int(i) for i in sys.stdin.readline().split(':')]

def reduction_of_fraction(n,m):
    
    # 최대공약수(greatest common divisor)를 구하는 함수
    def gcd(a,b):
        # 작은 수를 뒤로 빼준다. 즉, b가 작은 수
        if a < b:
            a, b = b, a
        # a % b != 0 일 때 동안, a, b = b, a % b 반복
        while a % b != 0:
            a, b = b, a % b
        return b
    
    # 약분 (reduction of fraction)를 구하는 함수
    n_m_gcd = gcd(N, M)
    # print(N, M, n_m_gcd) 
    print(f'{N//n_m_gcd}:{M//n_m_gcd}')

reduction_of_fraction(N,M)
