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

def merge_sorted(list):
    length = len(list)
    if length <= 1:
        return
    mid = length // 2
    group1, group2 = list[:mid], list[mid:]
    merge_sorted(group1)
    merge_sorted(group2)

    idx, idx1, idx2 = 0, 0, 0
    while idx1 < len(group1) and idx2 < len(group2):
        if group1[idx1][0] < group2[idx2][0]:
            list[idx] = group1[idx1]
            idx1 += 1
            idx += 1
        else:
            list[idx] = group2[idx2]
            idx2 += 1
            idx += 1
    while idx1 < len(group1):
        list[idx] = group1[idx1]
        idx1 += 1
        idx += 1
    while idx2 < len(group2):
        list[idx] = group2[idx2]
        idx2 += 1
        idx += 1
    return list

from pprint import pprint
pprint(merge_sorted(log))