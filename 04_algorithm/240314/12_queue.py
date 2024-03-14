class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self, data):
        self.head = Node(data)
        self.tail = self.head

    def is_empty(self):
        return self.head is None

    def enqueue(self, data):
        new_node = Node(data)
        self.tail.next = new_node
        self.tail = new_node

    def dequeue(self):
        if self.is_empty():
            return None
        data = self.head.data
        self.head = self.head.next
        return data

    def peek(self):
        if self.is_empty():
            return None
        return self.head.data
