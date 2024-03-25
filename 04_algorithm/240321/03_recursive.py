def recursive(start, end):
    if end == start + 1:
        return start * end
    else:
        return end * recursive(start, end - 1)
print(recursive(1, 10))
# print(1*2*3*4*5*6*7*8*9*10)
