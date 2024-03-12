# A, B, C = [int(x) for x in input().split()]

# print((A+B)%C)
# print(((A%C) + (B%C))%C)
# print((A*B)%C)
# print(((A%C) * (B%C))%C)

# n = int(input())
# result = 0
# for i in range(1, n+1):
#     result += i
# print(result)

num1 = int(input())
num2 = input()

result3 = num1*int(num2[2])
result4 = num1*int(num2[1])
result5 = num1*int(num2[0])

result6 = result3 + result4*10 + result5*100

print(result3)
print(result4)
print(result5)
print(result6)