import sys

TESTCASE = int(sys.stdin.readline())

for i in range(TESTCASE):
    N = int(sys.stdin.readline()) # 의상 수
    wear_dict = {}
    for i in range(N):
        item, category = sys.stdin.readline().split()
        if category in wear_dict:
            wear_dict[category].append(item)
        else:
            wear_dict[category] = [item]

    result = 1        
    for v in wear_dict.values():
        result *= len(v) + 1
        
    print(result - 1)