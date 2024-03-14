import sys
bracket = sys.stdin.readline()
stack = []
result = 0

for i in range(len(bracket)):
    if bracket[i] == '(': # 여는 괄호를 만나면 무조건!!! 스택에 append
        stack.append('(')
    else: # 닫는 괄호를 만나면 무조건, pop
        if stack:
            stack.pop()
            if bracket[i-1] == '(': # 레이저인 경우
                # 스택의 길이만큼 누적
                result += len(stack)
            else: # 파이프인 경우
                result += 1
        
print(result)

# ++ 레이저를 replace()를 이용해 *로 바꿔놓고 시작해보기