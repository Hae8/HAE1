def merge_sorted(list):
    print(f'분해된 리스트: {list}')
    length = len(list)
    if length <= 1 :
        return
    mid = length // 2
    group1, group2 = list[:mid], list[mid:]
    merge_sorted(group1)
    merge_sorted(group2)
    
    idx, idx1, idx2 = 0, 0, 0
    
    print(f'group1: {group1}, group2: {group2}')
    
    while idx1 < len(group1) and idx2 < len(group2):
        print(f'group1: {group1} 와 group2: {group2} 비교 중')
        
        if group1[idx1] < group2[idx2]:
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

num_list = [6, 1, 2, 5, 4, 3]
new_list = merge_sorted(num_list)
print(f'결과: {new_list}')