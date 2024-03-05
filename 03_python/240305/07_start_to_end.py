# arr = input().split()
# print(int(arr[0]) + int(arr[-1]))

## x, *_, y = [int(i) for i in input().split()] 
## result = x + y
## print(result)

### user_input_list = [int(i) for i in input().split()] 
### result = user_input_list[0]+user_input_list[-1]
### print(result)

user_input_list = [int(i) for i in input().split()] 
result = user_input_list.pop(0)+user_input_list.pop()
print(result)