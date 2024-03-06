N = int(input())

def factorial(num):
    if num <= 1:
        return 1
    result = factorial(num - 1)
    return num * result

print(factorial(N))