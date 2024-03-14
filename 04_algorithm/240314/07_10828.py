import sys
new_input = sys.stdin.readline
stack = []

num = new_input()
for i in range(int(num)):
    orders = new_input().split()
    order, *count = orders
    
    if order == 'push':
        stack.append(int(count[0]))
    elif order == 'pop':
        result = stack.pop() if stack else -1
        print(result)
    elif order == 'size':
        result = len(stack)
        print(result)
    elif order == 'empty':
        result = 0 if stack else 1
        print(result)
    elif order == 'top':
        result = stack[-1] if stack else -1
        print(result)
    