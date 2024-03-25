import sys

# N은 급여 정보 개수
# M은 내가 일할 날짜
N, M = [int(i) for i in sys.stdin.readline().split()]
pay = [int(i) for i in sys.stdin.readline().split()]

window_pay = sum(pay[:M])
max_pay = window_pay

for i in range(N-M):
    window_pay = window_pay + pay[i+M] - pay[i] # sum에서 시간복잡도 개선
    max_pay = max(max_pay, window_pay)

print(max_pay)