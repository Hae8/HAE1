class Car:
    def __init__(self, id, width):
        self.id = id
        self.width = width

    def __len__(self):
        return len(self.id)
    
    def __str__(self):
        return str({'Vehicle Num' : self.id, 'Vehicle width' : self.width})

c = Car('12가1234', 350)
print(c)
print(len(c))
print(str(c))