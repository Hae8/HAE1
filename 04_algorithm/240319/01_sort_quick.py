array = [31, 10, 12, 25, 13, 76, 22, 35, 99, 8]

def quick_sort(list, start, end):
    if start >= end:
        return list
    left = start + 1
    right = end
    while left <= right:
        while left <= end and list[left] <= list[start]:
            left += 1
        while right > start and list[right] >= list[start]:
            right -= 1
        if left > right:
            list[right], list[start] = list[start], list[right]
        else:
            list[right], list[left] = list[left], list[right]
    quick_sort(list, start, right - 1)
    quick_sort(list, right + 1, end)

quick_sort(array, 0, len(array) - 1)
print(array)