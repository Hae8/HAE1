N, M = [int(x) for x in input().split()] # [5, 4]
balls = [i for i in range (1, N+1)]

for _ in range (M):
    left, right = [int(x) - 1 for x in input().split()]
    # balls[left] <-> balls[right]
    balls[left], balls[right] = balls[right], balls[left]
print (*balls)
