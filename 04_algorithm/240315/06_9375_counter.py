import sys, collections

TESTCASE = int(sys.stdin.readline())
# TESTCASE = 2

for i in range(TESTCASE):
    N = int(sys.stdin.readline()) # 의상 수
    wear = []
    for i in range(N):
        item, category = sys.stdin.readline().split()
        wear.append(category)
    wear_counter = collections.Counter(wear)
    result = 1
    for v in wear_counter.values():
        result *= v + 1
    print(result - 1)