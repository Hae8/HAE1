import sys
sys.setrecursionlimit(10**6)

tree = []
while True:
    try:
        tree.append(int(sys.stdin.readline()))
    except:
        break

def pre_to_post(start, end):
    if start > end:
        return
    temp = end + 1
    # 새로운 루트 찾기 반복
    for i in range(start + 1, end + 1):
        if tree[start] < tree[i]:
            temp = i
            break
    # 왼쪽 서브트리 후위순회 작성
    pre_to_post(start + 1, temp - 1)
    # 오른쪽 서브트리 후위순회 작성
    pre_to_post(temp, end)
    print(tree[start])

pre_to_post(0, len(tree) - 1)