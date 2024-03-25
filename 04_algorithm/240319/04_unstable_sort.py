log = [
    ['서울', '09:00:00'],
    ['대전', '09:00:03'],
    ['대구', '09:00:13'],
    ['서울', '09:00:59'],
    ['대구', '09:01:10'],
    ['서울', '09:03:13'],
    ['부산', '09:10:11'],
    ['부산', '09:10:25'],
    ['대전', '09:14:25'],
    ['서울', '09:19:32'],
    ['서울', '09:19:46'],
    ['서울', '09:21:05'],
    ['부산', '09:22:43'],
    ['부산', '09:22:54'],
    ['서울', '09:25:52'],
    ['서울', '09:35:21'],
    ['부산', '09:36:14'],
    ['대전', '09:37:44']
]

def quick_sort(list, start, end):
    if start >= end:
        return list
    left = start + 1
    right = end
    while left <= right:
        while left <= end and list[left][0] <= list[start][0]:
            left += 1
        while right > start and list[right][0] >= list[start][0]:
            right -= 1
        if left > right:
            list[right], list[start] = list[start], list[right]
        else:
            list[right], list[left] = list[left], list[right]
    quick_sort(list, start, right - 1)
    quick_sort(list, right + 1, end)

from pprint import pprint
quick_sort(log, 0, len(log) - 1)
pprint(log)