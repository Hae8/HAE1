import sys, collections
new_input = sys.stdin.readline

num = int(new_input())
letters = [int(i) for i in new_input().split()]
balloons = collections.deque(enumerate(letters))

# print(balloons)
result = []

while balloons:
    balloon = balloons.popleft()
    result.append(balloon[0]+1)
    # print(balloons)
    if balloon[1] > 0:
        balloons.rotate(-balloon[1]+1)
    else:
        balloons.rotate(-balloon[1])
    # print(balloons)

print(*result)