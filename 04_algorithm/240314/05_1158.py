class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = Node(value)

    def index(self, idx):
        current = self.head
        count = 0
        while count < idx:
            count += 1
            current = current.next
        return current

    def pop(self, idx):
        if idx == 0:
            del_data = self.head.data
            self.head = self.head.next
            return del_data
        node = self.index(idx - 1)
        del_data = node.next.data
        node.next = node.next.next
        return del_data

import sys

N, K = [int(i) for i in sys.stdin.readline().split()]

ll = LinkedList(1)
for i in range(2, N + 1):
    ll.append(i)

alive = N
idx = (K - 1)
result = "<"
while ll.head.next is not None:
    idx %= alive
    result += f"{ll.pop(idx)}, "
    alive -= 1
    idx += (K - 1)
result += f"{ll.pop(0)}>"
print(result)