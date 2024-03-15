import sys, collections

TESTCASE = int(sys.stdin.readline())
# TESTCASE = 2

for i in range(TESTCASE):
    N = int(sys.stdin.readline()) # 의상 수
    wear_dict = collections.defaultdict(list)
    for i in range(N):
        item, category = sys.stdin.readline().split()
        wear_dict[category].append(item)
    result = 1
    for v in wear_dict.values():
        result *= len(v) + 1
    print(result - 1)