N, X = [int(x) for x in input().split()]
A = [int(x) for x in input().split()]

# A 배열 안에서 X 보다 작은 수를 출력
## result = []
## for num in A:
##     if num < X:
##         result.append (num)
## print(*result)

# list comprehension을 사용
### result = [num for num in A if num < X]
### print(*result)

for i in range(N):
    if A[i] < X:
        print(A[i], end=" ")
