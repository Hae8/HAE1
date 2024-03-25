class Node:
    def __init__(self, item, left, right):
        self.item = item
        self.left = left
        self.right = right

# 전위순회 (루트 -> 좌측 -> 우측)
def preorder(node):
    print(node.item, end=" ")
    if node.left != '.':
        preorder(tree[node.left])
    if node.right != '.':
        preorder(tree[node.right])

# 중위순회 (좌측 -> 루트 -> 우측)
def inorder(node):
    if node.left != '.':
        postorder(tree[node.left])
    print(node.item, end=" ")
    if node.right != '.':
        postorder(tree[node.right])

# 후위순회 (좌측 -> 우측 -> 루트)
def postorder(node):
    if node.left != '.':
        inorder(tree[node.left])
    if node.right != '.':
        inorder(tree[node.right])
    print(node.item, end=" ")
    
tree = {
    'A' : Node('A', 'B', 'C'),
    'B' : Node('B', 'D', 'E'),
    'C' : Node('C', 'F', 'G'),
    'D' : Node('D', 'H', '.'),
    'E' : Node('E', '.', '.'),
    'F' : Node('F', '.', '.'),
    'G' : Node('G', '.', '.'),
    'H' : Node('H', '.', '.'),
}

preorder(tree['A'])
print()
inorder(tree['A'])
print()
postorder(tree['A'])
