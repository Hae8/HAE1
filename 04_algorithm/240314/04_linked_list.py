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

if __name__ == "__main__":
    ll = LinkedList('첫번째')
    ll.append('두번째')
    ll.append('세번째')
    ll.append('네번째')
    ll.append('다섯번째')
    
    print("첫번째 노드:", ll.head)
    print("두번째 노드:", ll.head.next)
    print("세번째 노드:", ll.head.next.next)
    print("네번째 노드:", ll.head.next.next.next)
    print("다섯번째 노드:", ll.head.next.next.next.next)
    
    ll.pop(3)
    
    print("첫번째 노드:", ll.head)
    print("두번째 노드:", ll.head.next)
    print("세번째 노드:", ll.head.next.next)
    print("네번째 노드:", ll.head.next.next.next)
    print("다섯번째 노드:", ll.head.next.next.next.next)