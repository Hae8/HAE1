class Rectangle:
    def __init__(self, w, h):
        self.width = w
        self.height = h
        
    def get_perimeter(self):
        return 2 * self.__total_width_and_height__()
    
    def __total_width_and_height__(self): # private method
        return self.width + self.height