def divide_conquer(start, end):
    if start == end:
        return start
    if end == start + 1:
        return start * end
    else:
        half = (start + end) // 2
        return divide_conquer(start, half) * divide_conquer(half+1, end)

print(divide_conquer(1, 10))
