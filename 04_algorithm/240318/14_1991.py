import sys
N = int(sys.stdin.readline())
        
tree = {}
for i in range(N):
    item, left, right = sys.stdin.readline().split()
    tree[item] = (left, right)

# 전위순회 (루트 -> 좌측 -> 우측)
def preorder(node):
    print(node, end="")
    if tree[node][0] != '.':
        preorder(tree[node][0])
    if tree[node][1] != '.':
        preorder(tree[node][1])

# 중위순회 (좌측 -> 루트 -> 우측)
def inorder(node):
    if tree[node][0] != '.':
        inorder(tree[node][0])
    print(node, end="")
    if tree[node][1] != '.':
        inorder(tree[node][1])

# 후위순회 (좌측 -> 우측 -> 루트)
def postorder(node):
    if tree[node][0] != '.':
        postorder(tree[node][0])
    if tree[node][1] != '.':
        postorder(tree[node][1])
    print(node, end="")

preorder('A')
print()
inorder('A')
print()
postorder('A')